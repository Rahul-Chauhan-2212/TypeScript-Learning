var button1 = document.querySelector("button");
//const inputA=document.getElementById("num1");
var inputA = document.getElementById("num1"); //removes error at line 14
//const inputB=document.getElementById("num2");
var inputB = document.getElementById("num2");
/*function addNumbers(num1,num2){
    return num1+num2;
}*/
function addNumbers(num1, num2) {
    return num1 + num2;
}
button1.addEventListener("click", function () {
    console.log(addNumbers(+inputA.value, +inputB.value));
    //error at this line due to type
});
