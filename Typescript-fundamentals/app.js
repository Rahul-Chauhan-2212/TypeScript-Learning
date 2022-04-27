var userInput; //unknown is strict version of any
userInput = 8;
userInput = "Rahul";
var user;
//user=userInput;//error in this line
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("an error occured", 500);
