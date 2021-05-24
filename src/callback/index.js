// ---------- ¿Que es un callback? ----------
// Definicion: Un callback es una funcion que se encuentra como parametro de otra funcion. 
//Veamos un ejemplo para entenderlo mejor. 

// Veamos esta funcion. 
function sumar(num1, num2){
    return num1 + num2
} 

//Esta es una funcion "tradicional", a la que quizas hayas visto varias veces. 
//Tiene un nombre, en este caso sumar. 
//Tiene valores que va a recibir por parametros, en este caso num1 y num2. 
//Y tambien va a retornar un valor, en este caso la suma entre num1 y num2. 

//Pero ahora prestemos atencion a esta otra funcion. 

function calc (num1, num2, callback){
    return callback(num1 + num2)
}

//Seguramente habras notado que en este caso, esta funcion tiene algunas diferencias con la anterior. 
//En este caso, la funcion recibe un tercer parametro, en este caso llamado callback. 
//Y algo que tambien notamos, es que en el retorno de la funcion, se invoca a otra funcion. 

//Veamos estas dos funciones juntas y ejecutemoslas. 

function sumar(num1, num2){
    return num1 + num2;
}

function calc (num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 20, sumar))//22. 

//¿Quedan dudas sobre el codigo? 
//Veamos otro ejemplo para entenderlo un poco mas. 

function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)

//Resultado: 
//2021-05-24T22:58:22.031Z
//2021-05-24T22:58:25.048Z