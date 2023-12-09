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
let answer;
let adding = false;
let subtracting = false;
let mutiplying = false;
let dividing = false;

// to display on click the number picked
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
    adding = true;
});
btnSubtract.addEventListener("click", function(event){
    numSwitch = true;
    subtracting = true;
});
btnMultiply.addEventListener("click", function(event){
    numSwitch = true;
    mutiplying = true;
});
btnDivide.addEventListener("click", function(event){
    numSwitch = true;
    dividing = true;
});
btnEquals.addEventListener("click", function(event){
    calculate(number1,number2);
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

//btn 5
btn5.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "5";
    }
    else
    {
        num2 = num2 +"5";
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

//btn 6
btn6.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "6";
    }
    else
    {
        num2 = num2 +"6";
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

//btn 7
btn7.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "7";
    }
    else
    {
        num2 = num2 +"7";
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

//btn 8
btn8.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "8";
    }
    else
    {
        num2 = num2 +"8";
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

//btn 9
btn9.addEventListener("click", function(event){
    if (numSwitch == false){
        num1 = num1 + "9";
    }
    else
    {
        num2 = num2 +"9";
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

// adding numbers
    function calculate(num1, num2) {
        if (adding == true){
            answer = Number(num1)+Number(num2);
        }
        else if(subtracting){
            answer = Number(num1)-Number(num2);
        }
        else if(mutiplying){
            answer = Number(num1) * Number(num2);
        }
        else if(dividing){
            answer = Number(num1)/Number(num2);
        }
        displayField.innerText = answer;
        
    }



