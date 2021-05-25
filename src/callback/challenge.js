// ---------- CHALLENGE ----------

//Este challenge consiste en hacer una peticion a la API de Rick and Morthy, y hacer una peticion para obtener los elementos que trae esta API. 
//¿Hasta ahi todo sencillo? Ahora vengo a complicar las cosas. 
//Luego de hacer la peticion, debemos consultar al primer personaje, y dentro del primer personaje, consulta la dimension a la que pertenece. 

//Aqui comenzamos el challenge. 
//Primero instalamos la dependencia a XMLHttpRequest. 
//Una vez instalada esta dependencia, la requerimos. 

let XMLHttpsRequest = require('xmlhttprequest').XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/";
//Recordemos que XMLHttpRequest es un objeto que esta dentro de JavaScript 
//que nos va a permititr hacer peticiones hacia un servicio, en este caso una api, 
//con la caracteristica que no va a recargar la pagina. 

function fetchData( urlapi, callback ){
    let xhttp = new XMLHttpsRequest();
    //Recordemos que el .open() lo que permite es abrir una solicitud.
    //.open puede recibir tres parametros: 
    //1_ Forma de envio de datos. En este caso GET.
    //2_ A donde tiene que hacer la peticion. En este caso: Api de Rick and Morthy.
    //3_ Booleano (true or false). Este valor indica si la solicitud es sincrona o asincrona. El valor por defecto es true. 
    xhttp.open('GET', urlapi, true)
    //El objeto onreadystatechange esta observando los cambios de 
    //readyState. Esta funcion es llamada siempre que el estado de 
    //la solicitud cambie.
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            //Los estados que puede tener son 5: 
            //0: Peticion no inicializada.
            //1: Conexion con el servidor establecida
            //2: Peticion recibida.
            //3: Procesando respuesta.
            //4: Peticion finalizada y la repusta esta lista.
            if(xhttp.status === 200){
                //El primer parametro del callback es un error. 
                //El segudo parametro del callback es la informacion que se desencadena. En este caso es el resultado del llamado a la API. 
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error ' + urlapi)
                return callback(error, null)
            }
        }
    }
    //El metodo send lo que hace es enviar la peticion.
    xhttp.send();
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1)
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimeddnsion);
            console.log(data3.gfrfgf); 
        })
    })
})

//Viendo todo esto quizas te preguntes. 
//¿Por que no utilizamos la API fetch?
//En simple cuestiones, por que fetch trabaja con promesas. 
//Cuando nosotros hacemos la peticion, esta viene en forma de promesa.
//En este ejemplo, solo queriamos incluir callback en las peticiones.  
