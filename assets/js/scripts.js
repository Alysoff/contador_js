var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    mudaCor();
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    mudaCor();
}

// numeros negativos vermelhos
function mudaCor(){
    if (currentNumber < 0){
        document.getElementById("currentNumber").style.color = 'red';
    } else {
        document.getElementById("currentNumber").style.color = 'black';
    }
}
