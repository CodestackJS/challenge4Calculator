let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnAdd = document.getElementById("btnAdd");
let btnSubtract = document.getElementById("btnSubtract");
let btnMultiply = document.getElementById("btnMultiply");
let btnDivide = document.getElementById("btnDivide");
let btnEquals = document.getElementById("btnEquals");
let displayField = document.getElementById("displayField");
let userInput = document.getElementById("userInput");


let num1 = "";
let num2 = "";
let numSwitch = false;


//btn 0
btn0.addEventListener("click", function(event){
        if (numSwitch == false){
            num1 = num1 + "0";
        }
        else
        {
            num2 = num2 +"0";
        }
        display(num1, num2);
    });


    btnAdd.addEventListener("click", function(event){
        numSwitch = true;
    });


function display (number1, number2){
    if (numSwitch == false){
        displayField.innerText = number1;
    }
    else
    {
        displayField.innerText = number2;
    }
}                                                                                                                                                                                                    

//btn1
btn1.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "1";
    }
    else
    {
        num2 = num2 +"1";
    }
    display(num1, num2);
});


btnAdd.addEventListener("click", function(event){
    numSwitch = true;
});


function display (number1, number2){
if (numSwitch == false){
    displayField.innerText = number1;
}
else
{
    displayField.innerText = number2;
}
}       


//btn 2
btn2.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "2";
    }
    else
    {
        num2 = num2 +"2";
    }
    display(num1, num2);
});


btnAdd.addEventListener("click", function(event){
    numSwitch = true;
});


function display (number1, number2){
if (numSwitch == false){
    displayField.innerText = number1;
}
else
{
    displayField.innerText = number2;
}
}    

//btn 3
btn3.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "3";
    }
    else
    {
        num2 = num2 +"3";
    }
    display(num1, num2);
});


btnAdd.addEventListener("click", function(event){
    numSwitch = true;
});


function display (number1, number2){
if (numSwitch == false){
    displayField.innerText = number1;
}
else
{
    displayField.innerText = number2;
}
}    

//btn 4
btn4.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "4";
    }
    else
    {
        num2 = num2 +"4";
    }
    display(num1, num2);
});


btnAdd.addEventListener("click", function(event){
    numSwitch = true;
});


function display (number1, number2){
if (numSwitch == false){
    displayField.innerText = number1;
}
else
{
    displayField.innerText = number2;
}
}    

