let numbers = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 65){
        clearInterval();
    }else{
        counter += 1;
        numbers.innerHTML = counter + "%";
    }

}, 10);


let number = document.getElementById("number2");
let counter1 = 0;
setInterval(() => {
    if(counter1 == 75){
        clearInterval();
    }else{
        counter1 += 1;
        number.innerHTML = counter1 + "%";
    }

}, 10);


let number1 = document.getElementById("number3");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 85){
        clearInterval();
    }else{
        counter2 += 1;
        number1.innerHTML = counter2 + "%";
    }

}, 10);