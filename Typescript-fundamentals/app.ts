function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(result: number): void {
  console.log(result);
}

let result = add(7, 9);
let combinedResult :(a:number, b:number)=>number;
//let combinedResult:Function;
combinedResult=add;
//combinedResult=5;//error at this line
//combinedResult=printResult; //run time error
printResult(result);
printResult(combinedResult(10,7));
