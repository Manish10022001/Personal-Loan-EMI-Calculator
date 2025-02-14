function AmountChange(){
    // on amount change value os slider should be displayed in the amount box
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}
function YearChange(){
    document.getElementById("txtYear").value = document.getElementById("rangeYear").value;
}
function RateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}

function AmountTextBoxChange(){
    document.getElementById("rangeAmount").value= document.getElementById("txtAmount").value;
}
function YearTextBoxChange(){
    document.getElementById("rangeYear").value = document.getElementById("txtYear").value;
}
function RateTextBoxChange(){
    document.getElementById("rangeRate").value = 
    document.getElementById("txtRate").value;
}
function CalculateClick(){
    var p = parseInt(document.getElementById("txtAmount").value);
    var n = parseInt(document.getElementById("txtYear").value)*12;
    var r = parseInt(document.getElementById("txtRate").value)/12/100;

    var emi = p*r*Math.pow(1+r,n) /
                  Math.pow(1+r,n)-1;
                
    //result
    document.getElementById("result").innerHTML = "Your monthly installment amount is <b><span class='text-primary'>&#8377;" +Math.round(emi) + "</span></b> for "+p+" in "+n/12 +" years.";
}
