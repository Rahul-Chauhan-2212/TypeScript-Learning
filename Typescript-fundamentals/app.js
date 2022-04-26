function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log(result);
}
var result = add(7, 9);
var combinedResult;
//let combinedResult:Function;
combinedResult = add;
//combinedResult=5;//error at this line
//combinedResult=printResult; //run time error
printResult(result);
printResult(combinedResult(10, 7));
