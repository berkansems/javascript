function concat() {
    let names = new Array();
    names.push("Mehmet");
    names.push("Ali");
    //alert(names);

    let names2 = new Array();
    names2.push("Ayşe");
    names2.push("Merve");

    let names3 = names.concat(names2);
    alert(names3);
}

function every() {
    function isNumberBigger(element, index, array) {
        return element >= 20;
    }

    let state1 = [20, 8, 10, 56, 123].every(isNumberBigger);
    alert(state1);
    let state2 = [20, 34, 43, 344, 222].every(isNumberBigger);
    alert(state2);
}

function filter() {
    function bigNumbers(number) {
        return number >= 25;
    }

    let bigNumberList = [12, 22, 56, 77, 87].filter(bigNumbers);
    alert(bigNumberList);
}

function foreach() {
    let fruits = ["apple", "orange", "cherry", "pineapple"];
    let result = "";
    fruits.forEach(eachValue);

    function eachValue(item, index) {
        result += index + "  :  " + item + "    ";
    }

    alert(result);
}

function indexOf() {
    let list = [2, 10, 24, 455, 23];
    alert(list.indexOf(24));
    alert(list.indexOf(23));
    alert(list.indexOf(532));
}

function reverse() {
    let list = [2, 10, 24, 455, 23];
    alert(list.reverse());
}

function sort() {
    let list = ["C", "A", "D"];
    alert(list.sort());
}

function to_String() {
    let list = ["C", "A", "D"];
    alert(list.toString());
}



