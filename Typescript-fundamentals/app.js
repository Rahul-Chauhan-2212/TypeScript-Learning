"use strict";
let userInput; //unknown is strict version of any
userInput = 8;
userInput = "Rahul";
let user;
//user=userInput;//error in this line
console.log("Watch node started...");
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("an error occured", 500);
