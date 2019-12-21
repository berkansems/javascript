function clear() {
    document.getElementById("result").innerHTML = "";
}


function loop1() {
    clear();
    for (var i = 1; i <= 10; i++) {
        document.getElementById("result").innerHTML += i + "<br>";
    }
}

function loop2() {
    clear();
    for (var i = 10; i > 0; i--) {
        document.getElementById("result").innerHTML += i + "<br>";
    }
}

function loop3() {
    clear();
    for (var i = 1; i <= 10; i++) {
        document.getElementById("result").innerHTML += "Hello World" + "<br>";
    }
}

function loop4() {
    clear();
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            document.getElementById("result").innerHTML += i + "<br>";
        }
    }
}

function loop5() {
    clear();
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {

            document.getElementById("result").innerHTML += i + "<br>";
        }
    }
}

function loop6() {
    clear();
    var text = window.prompt("Enter text");
    var counter = window.prompt("Enter quantity");
    for (var i = 1; i <= counter; i++) {
        document.getElementById("result").innerHTML += text + "<br>";
        //document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + text + "<br>";
    }
}

function loop7() {
    clear();
    var text = window.prompt("Enter Text");
    for (var i = 10; i < 50; i++) {
        document.getElementById("result").innerHTML += "<span style='font-size:" + (i + 5) + "px;'>" + text + "</span><br>";
    }
}

function loop8() {
    clear();
    for (var i = 0; i < 20; i++) {
        if (i % 2 != 0) {
            document.getElementById("result").innerHTML += i + "<br>";
        }
    }
}

function loop9() {
    clear();
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        sum = sum + i;
    }
    document.getElementById("result").innerHTML = sum;
}

function loop10() {
    clear();
    var factorial = 1;
    var counter = parseInt(window.prompt("Enter Number"));
    for (let i = counter; i > 0; i--) {
        factorial = factorial * i;
        //factorial *= i;
    }
    document.getElementById("result").innerHTML = factorial;
}

function loop11() {
    clear();
    var counter = parseInt(window.prompt("Enter Counter"));
    var mul = 1;
    for (var i = 0; i < counter; i++) {
        var number = parseInt(window.prompt((i + 1) + ". Enter Number"));
        mul *= number;
    }
    document.getElementById("result").innerHTML = mul;
}
