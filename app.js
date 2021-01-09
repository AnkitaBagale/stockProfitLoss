var form = document.forms[0];
var inputs = document.querySelectorAll(".input");
var output = document.querySelector(".output");
var contentDiv = document.querySelector(".displayFlex");
var cols=document.querySelectorAll(".col");


form.addEventListener("submit", checkHandler);

function checkHandler(e){
    e.preventDefault();
    cols[0].classList.remove("transperantBg");
    cols[1].classList.remove("transperantBg");
    contentDiv.classList.remove("sadTheme");

    var CP = inputs[0].value;
    var Qty = inputs[1].value;
    var SP = inputs[2].value;
    if( !isNaN(CP) && !isNaN(Qty) && !isNaN(SP)){
        CP = Number(CP);
        Qty = Number(Qty);
        SP = Number(SP);
        if(CP>0 && Qty>0 && SP>0){
            //loss
            if(CP>SP){
                var loss = ((CP-SP)*Qty).toFixed(2);
                var lossPer=(((CP-SP)*100)/CP.toFixed(2)) ;
                output.innerHTML=  `You lost ${lossPer}%. Your total loss is ₹${loss}`;
                output.style.backgroundImage = "url('./Images/sad2.gif')";

                if(lossPer>50){
                    cols[0].classList.add("transperantBg");
                    cols[1].classList.add("transperantBg");
                    contentDiv.classList.add("sadTheme");

                    console.log(contentDiv, cols);
                }



            }
            //profit
            else{
                let profit = ((SP-CP)*Qty).toFixed(2)
                let profitPer=(((SP-CP)*100)/CP).toFixed(2) ;
                output.innerHTML=  `<span style="background-color: rgb(0,0,0,0.5)">You gained ${profitPer}%. Your total profit is ₹${profit}</span>`;
                output.style.backgroundImage = "url('./Images/money.gif')";
            }
        }else{
            //error
            output.innerHTML=`Please enter values greater than 0 (only numbers are allowed in above fields)`
            output.style.backgroundImage = "";
        }
    }else{
        //error
        output.innerHTML="Please enter values greater than 0 (only numbers are allowed in above fields)"
        output.style.backgroundImage = "";
    }
}