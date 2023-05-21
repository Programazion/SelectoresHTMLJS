console.log("Loading J..");

function actionButton(){
    console.log('Ejecutado Boton')
    var myP=document.getElementsByTagName('p');
    console.log(myP)
    myP[0].style["background-color"]="red";
    myP[1].innerHTML=Date();
    //myP[2].style.display="none";
/*
    if( myP[2].style.display=="none"){
        myP[2].style.display="block";
    }else{
        myP[2].style.display="none";
    }*/

    var myIdP = document.getElementById('p_3');
    var myNewValue= document.getElementById('input_1');


    if( myIdP.style.display=="none"){
        myIdP.style.display="block";
        myIdP.style.textAlign= "justify";
        myIdP.innerHTML= myNewValue.value;
    }else{
        myIdP.style.display="none";
    }


    var myButton= document.getElementById('color')
    myButton.style.backgroundColor="green";
    
    var myInput=document.getElementById('input_1');
    console.log("Valor Input=>", myInput.value);
   
    /*var myInput=document.getElementById('input_1');
    console.log(myInput);
    myInput.innerHTML="Defaul Value";
    myInput.value="Default value";
    */

    var myList=document.getElementsByClassName('list');
    console.log(myList);
    myList[0].innerHTML="Ingresa tu cédula";
    myList[1].innerHTML="Ingresa tu correo";
    myList[2].innerHTML="Ingresa tu celular";

    
    

}