var num = document.getElementById("keys");
var display = document.getElementById("display");
var equation = "";

num.addEventListener('click', function(e) {
    if (e.target.matches("button") && e.target.id != "equate") {
        equation += e.target.value;
        display.innerHTML = equation;
    }
    if (e.target.className === 'op' && equation.trim().length === 0) {
        // DO NOTHING :P
    } else {
        equation += e.target.value;
        output.innerHTML = equation;
    }
});

document.getElementById("clear").addEventListener('click', function() {
    equation = "";
    display.innerHTML = "";
});

document.getElementById("equate").addEventListener('click', function() {
    var str = equation;
    str = str.replace("x", "*");
    str = str.replace("÷", "/");
    console.log(str);
    var ans = eval(str);
    display.innerHTML = ans;
    equation = ans;
});