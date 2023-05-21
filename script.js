console.log("LOADING JavaScript");
console.log(Date());

//Selector por elemento 
var elementsP = document.getElementsByTagName('p');
console.log("Selector por elemento =>", elementsP);
console.log("Selector por elemento =>", elementsP[0]);
console.log("Selector por elemento =>", elementsP[1]);



var elementsDivs = document.getElementsByTagName('div');
console.log("Selector por elemento =>", elementsDivs);
console.log("Selector por elemento =>", elementsDivs[0]);
console.log("Selector por elemento =>", elementsDivs[1]);
console.log("Selector por elemento =>", elementsDivs[2]);

//Selector por ID
var elementForId=document.getElementById('mySection_3');
console.log("Selector por Id", elementForId);

var elementForId=document.getElementById('div_1');
console.log("Selector por Id", elementForId)

var elementForId=document.getElementById('p_1');
elementForId.innerHTML="Nuevo valor al parrafo";
console.log("Parrafo por consola =>", elementForId)

//Selector por Clase

var elementForClass = document.getElementsByClassName('itemInformation');
console.log("Selector por class =>", elementForClass[0]);
console.log("Selector por class =>", elementForClass[1]);
console.log("Selector por class =>", elementForClass[2]);
console.log("Selector por class =>", elementForClass[3]);

var elementForClass = document.getElementsByClassName('inputContainer');
console.log("Selector por class =>", elementForClass);

var elementForClass = document.getElementsByClassName('section');
console.log("Selector por class =>", elementForClass);

elementForClass[1].innerHTML="Ejemplo";




    