function reset(){
    document.getElementById("num1").value = "0"
    document.getElementById("num2").value = "0"
    document.getElementById("sum").value = "0"
}
function add(){
    let n1 = Number(document.getElementById("num1").value)
    let n2 = Number(document.getElementById("num2").value)
    let addition = n1 + n2 
    document.getElementById("sum").value = String(addition)
}
function sub(){
    let n1 = Number (document.getElementById("num1").value)
    let n2 = Number (document.getElementById("num2").value)
    let subtraction = n1-n2
    document.getElementById('sum').value = String(subtraction)
}
function mul(){
    let n1 = Number (document.getElementById('num1').value)
    let n2 = Number (document.getElementById('num2').value)
    let multiplication = n1*n2
    document.getElementById('sum').value = String (multiplication)
}
function div(){
    let n1 = Number (document.getElementById('num1').value)
    let n2 = Number (document.getElementById('num2').value)
    let division = n1/n2
    document.getElementById('sum').value = String (division)
}
function mod(){
    let n1 = Number (document.getElementById('num1').value)
    let n2 = Number (document.getElementById('num2').value)
    let module = n1%n2
    document.getElementById('sum').value = String (module)
}













// function reset(){
//     document.getElementById("txtnum1").value = "0"
//     document.getElementById("txtnum2").value = "0"
//     document.getElementById("txtsum").value = "0"
// }
// function add(){
//     var n1= Number(document.getElementById("txtnum1").value)
//     var n2= Number(document.getElementById("txtnum2").value)
//     var sum = n1 + n2
//     document.getElementById("txtsum").value = String(sum)
 
// }