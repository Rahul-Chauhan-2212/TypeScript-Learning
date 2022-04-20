const button1=document.querySelector("button");
//const inputA=document.getElementById("num1");
const inputA=document.getElementById("num1")! as HTMLInputElement; //removes error at line 14
//const inputB=document.getElementById("num2");
const inputB=document.getElementById("num2")! as HTMLInputElement;

/*function addNumbers(num1,num2){
    return num1+num2;
}*/

function addNumbers(num1:number,num2:number){
    return num1+num2;
}

button1.addEventListener("click",function(){
console.log(addNumbers(+inputA.value,+inputB.value))
//error at this line due to type
});