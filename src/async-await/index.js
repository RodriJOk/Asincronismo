// ---------- Async Await ----------

//Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then().
//La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navagador: “Espera a que la promesa se resuleva y almacena su resultado en esta variable”. 
//Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto
//Veamos un ejemplo para entenderlo mejor. 

const funcionAsincrona = () => {
    return new Promise ((resolve, reject)=>{
        (true) 
        ? setTimeout(()=>{
            resolve("Se resolvio la promesa de forma correcta !")
        }, 3000)
        : reject(new Error('No se resolvio la promesa de forma correcta'))
    });
}

//Esta es la estructura y sintaxis de Async/Await

const doSomething = async () => {
    //await espera el resultado de la promesa a la que se invoco. 
    const something = await funcionAsincrona()
    console.log(something)
}

console.log("Before")
doSomething();
console.log("After")

// Before
// After
// Se resolvio la promesa de forma correcta !

//Veamos un ejemplo mas para entenderlo mejor. 

const funcionAsincrona = () => {
    return new Promise ((resolve, reject)=>{
        (false) 
        ? setTimeout(()=>{
            resolve("Se resolvio la promesa de forma correcta !")
        }, 3000)
        : reject('No se resolvio la promesa de forma correcta')
    });
}

const miSegundaFuncion = async () =>{
    try{
        const something = await funcionAsincrona()
        console.log(something, "Something")
    } catch (error){
        console.log(error, "Estoy en el catch")
    }
}

console.log("Paso 1")
miSegundaFuncion()
console.log("Paso 3")
