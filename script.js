let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")
let zero = document.getElementById("zero")
let num5 = document.getElementById("num5")
let num6 = document.getElementById("num6")
let num7 = document.getElementById("num7")
let num8 = document.getElementById("num8")
let num9 = document.getElementById("num9")
let deci = document.getElementById("decimal")
let answer = document.getElementById("answer")
let add = document.getElementById("plus")
let minus = document.getElementById("minus")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let clear = document.getElementById("reset")
let modulo = document.getElementById("modulo")
let none = document.getElementById("none")
let show = document.getElementById("show")

num1.onclick = function(){
    show.innerText += "1";
}
num2.onclick = function(){
    show.innerText += "2";
}
num3.onclick = function(){
    show.innerText += "3";
}
num4.onclick = function(){
    show.innerText += "4";
}
num5.onclick = function(){
    show.innerText += "5";
}
num6.onclick = function(){
    show.innerText += "6";
}
num7.onclick = function(){
    show.innerText += "7";
}
num8.onclick = function(){
    show.innerText += "8";
}
num9.onclick = function(){
    show.innerText += "9";
}
zero.onclick = function(){
    show.innerText += "0";
}
add.onclick = function(){
    show.innerText += "+";
}
minus.onclick = function(){
    show.innerText += "-";
}
multiply.onclick = function(){
    show.innerText += "*";
}
divide.onclick = function(){
    show.innerText += "/";
}
answer.onclick = function(){
    show.innerText= eval(show.innerText)
}
clear.onclick = function(){
    show.innerText = "";
}
modulo.onclick = function(){
    show.innerText += "%";
}
decimal.onclick = function(){
    show.innerText += ".";
}
none.onclick = function(){
    show.innerText = show.innerText.substring(0, show.innerText.length - 1);
}
