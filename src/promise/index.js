// ---------- Promise ----------

//Las promesas utilizan el objeto Promise para ser ejecutadas
//Como su nombre lo indica, una promesa conceptualmente podemos entenderla como que algo va a suceder.
//Pero ¿cuando? 
//Puede ser ahora, en el futuro o nunca 
//Las promesas (o promise en ingles) nos van a permitir trabajar con el asincronismo en Javascript. 

const somethingWillHappen = () =>{
    //Aqui es donde inicializamos la promesa
    return new Promise (( resolve, reject ) =>{
        //Condicional si la promesa se resuelve o rechaza
        if(false){
            resolve("Hey!!");
        }else{
            reject("Ups !! Algo ha salido mal")
        }
    })
}
//Aqui nosotros invocamos la funcion. Pero como se trata de una promesa, tenemos dos eventos encadenados a la promesa: .then() y .catch()
somethingWillHappen()
    //En caso de que la promesa se resuelva correctamente
    .then(response => console.log(response))
    //En caso de que la promesa sea rechazada.
    .catch(reject=> console.log(reject))

//Veamos un segundo ejemplo para que quede mas claro. 

const somethingWillHappenTwo = () =>{
    return new Promise ((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve("Se resolvio la Promesa")
            }, 2000)
        }else{
            reject("No se pudo resolver la Promesa")
        }
    })
}

somethingWillHappenTwo()
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))