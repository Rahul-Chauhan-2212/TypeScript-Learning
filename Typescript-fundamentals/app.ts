function combine(input1: number | string, input2: number | string) { //union
  let result;
  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const number1 = 5;
const number2 = 10;
console.log(combine(number1, number2));
