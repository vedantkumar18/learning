//console.log(`Starting Textio server.....`);
// simple console.log function.

/*
data types:

boolean: true or false

var isTall = true;
returns true;

var isCool = false;
returns false;

string: a sequence of characters

var name = `Alice`
returns Alice which is the name as the variable suggests 

number: represents integer and floating-point(fractional) numbers.

var age = 42;

var weight = 150.5;

undefined: a variable that has not been assigned a value.

var brainSize = undefined;
since there is no value.
*/

/*
beginning of code
-------------
var smsSendingLimit = 20; // the maximum number of sms that can be sent.
var hasPermission = true; // checks if user has permission or not. 
var username = `King111v`; // store username 
var nothing = undefined; // this is an undefined value with no apparent use.

console.log(`smsSendingLimit is a ` + typeof smsSendingLimit); // number
console.log(`hasPermission is a ` + typeof hasPermission ); // boolean
console.log(`username is a ` + typeof username ); // string
console.log(`nothing is a ` + typeof nothing); // undefined
-----------------------
end of code 
*/ 


/*
let and const:
let allows change for the set values 
const doesnt allow any change for the set value
*/

/* 
beginning of code
----------------------
let messageText = "Welcome to Textio!";
const isBirthday = true;

if (isBirthday) {
  let messageText = "Happy Birthday!";

  console.log("sending birthday message...");
  console.log("messageText: ", messageText);
}

// don't touch below this line

console.log("sending welcome message...");
console.log("messageText: ", messageText);
-------------------
end of code
*/

/*
start of code
-------------------------
const promoMessages = 12;
const reminderMessages = 15;
const welcomeMessages = 8;
const supportMessages = 5;

const totalMessagesSent = promoMessages + reminderMessages + welcomeMessages + supportMessages;
const averageMessagesSent = totalMessagesSent / 4; 

console.log("Total messages:", totalMessagesSent);
console.log("Average messages:", averageMessagesSent);
-------------------
end of code
*/

/*
-----------------------------
start of code 
let numFailedMessages = 1336;
numFailedMessages ++;

console.log(numFailedMessages + " failed messages");
-------------------
end of code 
*/
