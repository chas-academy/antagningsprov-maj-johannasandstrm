

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const person = [
    {name:"Sanna", age:32},
    {name:"Johan", age:19},
    {name:"Sixten", age:27},
    {name:"Lisa", age:45},
    {name:"Jens", age:77}
];

function personöver30(arraypersoner){
    for (let i = 0; i < arraypersoner.length; i++){
        if (arraypersoner[i].age > 30){
            console.log(arraypersoner[i].name);
        }
    }       
}

    personöver30(person);

}

module.exports = { uppg8 };