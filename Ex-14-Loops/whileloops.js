function whileLoop1() {
    let i = 0;
    while (i < 100) {
        i += 2; // i=i+2;
        document.getElementById("result").innerHTML += i + "<br/>";
    }
}

function whileLoop2() {
    let number = 0;
    let sum = 0;
    let avg;
    let counter = 0;
    while (number != -1) {
        number = parseInt(window.prompt("Enter Number"));
        if (number != -1) {
            sum += number;
            counter++;
        }
    }
    avg = sum / counter;
    alert("Average :  " + avg);
}