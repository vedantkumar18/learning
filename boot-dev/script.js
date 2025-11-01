console.log(`Starting Textio server.....`);
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

var smsSendingLimit = 20; // the maximum number of sms that can be sent.
var hasPermission = true; // checks if user has permission or not. 
var username = `King111v`; // store username 
var nothing = undefined; // this is an undefined value with no apparent use.

console.log(`smsSendingLimit is a ` + typeof smsSendingLimit); // number
console.log(`hasPermission is a ` + typeof hasPermission ); // boolean
console.log(`username is a ` + typeof username ); // string
console.log(`nothing is a ` + typeof nothing); // undefined


/*
let and const:
let allows change for the set values 
const doesnt allow any change for the set value
*/

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

// next lesson:

const promoMessages = 12;
const reminderMessages = 15;
const welcomeMessages = 8;
const supportMessages = 5;

const totalMessagesSent = promoMessages + reminderMessages + welcomeMessages + supportMessages;
const averageMessagesSent = totalMessagesSent / 4; 

console.log("Total messages:", totalMessagesSent);
console.log("Average messages:", averageMessagesSent);

// next lesson 

let numFailedMessages = 1336;
numFailedMessages ++;

console.log(numFailedMessages + " failed messages");

/*
undefined vs undeclared
We can create an undefined variable by giving it a name, but no value:
let favoriteSandersonCharacter; // undefined
console.log(typeof favoriteSandersonCharacter); // "undefined"

However if we never create the name, it's "undeclared", and
undeclared variables actually throw an error (so don't do this):
console.log(favoriteRothfussCharacter); 
// ReferenceError: favoriteRothfussCharacter is not defined
*/

let sentMessages;
let deliveredMessages;
let failedMessages;

console.log("Sent is:", sentMessages);
console.log("Delivered is:", deliveredMessages);
console.log("Failed is:", failedMessages);


/*
null vs. Undefined 

  undefined: It doesn't exist at all. In grug-speak undefined is "very nothing"
  null: It (kind of) exists, but it's empty. In grug-speak null is "kinda nothing"
*/

let sentMessages = null;
let deliveredMessages = null;
let failedMessages = null;

console.log("Sent is null:", sentMessages === null);
console.log("Delivered is null:", deliveredMessages === null);
console.log("Failed is null:", failedMessages === null);

// next lesson:

let totalSentMessages = 100;
let totalReceivedMessages = 50;
const totalMessages = totalSentMessages + totalReceivedMessages;

console.log("Total sent messages:", totalSentMessages);
console.log("Total received messages:", totalReceivedMessages);
console.log("Total messages:", totalMessages);

// next lesson 

const averageOpenRate = 0.23, displayMessage = `Tesla`;

console.log("Average open rate:", averageOpenRate);
console.log("Display message:", displayMessage);

// About strings 
const email = "stoob@gmail.com";
console.log(email[0]);
console.log(email[email.length - 1]);
console.log(email);

// template literals
const name = `Saul Goodman`;
const openRate = 30.5;

msg = `hi ${name}, your open rate is ${openRate}`;

console.log(msg);

//semi-colons in js
console.log("contacting cell tower..."); console.log("sending message...");

// string encoding
//let name = `😀`;
let name = `bear`
console.log(`constant 'name' UTF-16 unit length: ${name.length}`);
console.log(`constant 'name' character length: ${[...name].length}`);
console.log("=====================================");
console.log(`Hi ${name}, welcome to Textio!`);

// conditionals 
let messageLen = 20;
let maxMessageLen = 20;
console.log(
  "Trying to send a message of length:",
  messageLen,
  "and a max length of:",
  maxMessageLen,
);

// don't touch above this line

if (messageLen <= maxMessageLen) {
  console.log("Message sent");
} else {
  console.log("Message not sent");
}

//comparison operators
console.log(5 < 6);
console.log(5 !== 6);
console.log(5 !== "5");
console.log(6 >= 6);

//logical operators
const hasHighOpenRate = true;
const isRecent = true;
const hasStrongReplyRate = false;
const canBeResent = true;
const isFlaggedAsSpam = false;

const isHighEngagement = hasHighOpenRate && isRecent && hasStrongReplyRate || canBeResent && !isFlaggedAsSpam// ?

console.log(`The campaign is high-engagement: ${isHighEngagement}`);

//switch
function billingCost(plan) {
  switch (plan) {
    case "basic":
      return 10.0;
    case "pro":
      return 20.0;
    case "enterprise":
      return 50.0;
    default:
      return 0.0;
  }
}

// don't touch below this line

console.log(`The cost for a basic plan is $${billingCost("basic").toFixed(2)}`);
console.log(`The cost for a pro plan is $${billingCost("pro").toFixed(2)}`);
console.log(
  `The cost for a enterprise plan is $${billingCost("enterprise").toFixed(2)}`,
);
console.log(`The cost for a free plan is $${billingCost("free").toFixed(2)}`);
console.log(
  `The cost for a unknown plan is $${billingCost("unknown").toFixed(2)}`,
);

//ternary operator
const retryLimit = 10;
const numRetries = 11;

const messageStatus = numRetries <= retryLimit  ? "processing" : "failed"

console.log(messageStatus);

the below whole code is formatted in if else way and ternary operator way.
//truthy and flasy 

const userCredits = 2;

if (userCredits > 0) {
  console.log("Sending message...");
} else {
  console.log("Not enough credits.");
}
------------------------------------------------
const userCredits = 2;
const usercredVaildation = userCredits > 0 ? `sending message....` :  `not enough credits`
console.log(usercredVaildation);

// nullish coalescing
const name = "James Holden";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
const subscriptionType = null;

// don't touch above this line

console.log(
  `Creating ${subscriptionType ?? "Guest"} Profile for ${name} with ${provider} at ${phoneNumber}.`,
);

// start of functions
function concat(str1, str2) {
  return str1 + str2;
}

console.log(concat("Lane,", " happy birthday!"));
console.log(concat("Naomi,", " can you call me?"));
console.log(concat("Juliette,", " where did you go?"));

