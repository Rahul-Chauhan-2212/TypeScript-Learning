let userInput: unknown; //unknown is strict version of any
userInput = 8;
userInput = "Rahul";
let user: string;
//user=userInput;//error in this line
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("an error occured", 500);
