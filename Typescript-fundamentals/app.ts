function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' |'as-text' //literal type
) {
  //union
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion==="as-number")
    result = +input1 + +input2;
  else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine('5', '10', "as-text"));
