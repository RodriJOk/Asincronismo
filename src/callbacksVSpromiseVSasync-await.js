// ------------ Callbacks, Async Await y Promesas ------------
// ------------ ¿Por cual me decido? Esa es la cuestion ------------

//Lo cierto es que podemos elegir alguna de ellas segun lo necesitemos. 
//Algo que nos podra ser de mucha ayuda, sera repasar las ventajas y desventajas de cada uno. 

// ------------ Callbacks ------------

//Ventajas 

/*
SIMPLICIDAD:  
Los callbacks nos permiten garantizar que tenemos una funcion 
que recibe otra funcion y va a ejecutarse sin ningun problema. 

COMPATIBILIDAD: 
Tienen soporte en cualquier navegador, sea antiguo como mas moderno
Eso nos da la garantia que los prodremos implementar en cualquier proyecto. 
*/ 

//Desventajas

/*
COMPOSICION: 
La composicion suele ser un poco tediosa y tosca. 
Mantener la estructruta es un desafio, ya que tenemos anidados cada vez mas elementos.
Tambien es facil caer en los CALLBACK HELL. 
Esto hace el codigo menos entendible y escalable
*/

// ------------ Promise ------------

//Ventajas

/*
FACILMENTE ENLAZABLES:
Una de las principales ventajas de una promesa. 
Puedo tener un .then() y lo puedo enlazar con un return, tener otro .then() y volver a enlazarlo con otro return.

LEGIBLE E INTUITIVO:
No hay complicaciones cuando el codigo se expande, ya que sigue siendo intuitivo y muy legible. 
*/

//Desventajas

/*
NO HAY EXCEPCIONES: 
Una de las desventajas de usar promesas es que no maneja excepciones, solo disponemos de un .catch()
Y solo de esa forma capturamos el error. 

PROPENSO A ERRORES: 
Las promesas son propensas a errores si no retornamos el siguiente llamado

NO DISPONIBLE EN TODOS LOS NAVEGADORES: 
Para que nuestro codigo sea compatible en todo los navegadores, 
necesitaremos las utilizacion de polyfills. 
*/

// ------------ Async-Await ------------
//Ventajas
/*
CODIGO LEGIBLE: 
En Async-Await, podemos utilizar el try() y catch()
Lo que genera un codigo mas ordenado, limpio, intuitivo y facil de leer. 
*/

//Desventajas

/*
ESPERA EN LOS LLAMADOS: 
Al hacer cada uno de los llamados, debemos esperar la respuesta de cada uno. 

NO DISPONIBLE EN TODOS LOS NAVEGADORES: 
Al igual que ocurre con las promesas, no esta disponible en todos los navegadores. 
Por lo que al intentar implementarlas, debemos valernos de los polyfills, o transoiladores como Babel. 
*/