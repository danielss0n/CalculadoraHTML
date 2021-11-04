var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var total = document.getElementById("resultado")

function substituir(){
    num1.value = total.value
}
function zerar(){
    num1.value = ""
    num2.value = ""
    total.value = ""
}

function somar(num1, num2){
    var resultado = num1 + num2
    total.value = resultado
}    

function subtrair(num1,num2){
    var resultado = num1-num2
    total.value = resultado
}
function multiplicar(num1,num2){
    var resultado = num1 * num2
    total.value = resultado
}
function dividir(num1,num2){
    var resultado = num1 / num2
    total.value = resultado
}
function potenciar(num1,num2){
    var resultado = Math.pow(num1,num2);
    total.value = resultado
}