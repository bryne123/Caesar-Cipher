//This pulls the text from the input box and converts the chracters into character code
let message = document.getElementById("message");

function getKey() {
  let key = document.getElementById("key");
  console.log(key.value);
}

function getMessage() {
  console.log(message.value);
  let newMessage = message.value.split("");
  console.log(newMessage);
  let messageCode = newMessage.map(function (element) {
    // get charcCode. Store number in variable
    return element.charCodeAt();
  });
  console.log(messageCode);

  messageCode = messageCode.map(function (element) {
    //Increase by key.
    return (element = element + Number(document.getElementById("key").value));
  });
  console.log(messageCode);
  // convert number back to character
  messageCode = messageCode.map(function (element) {
    return (element = String.fromCharCode(element));
  });
  console.log(messageCode);
  messageCode = messageCode.toString();
  console.log(messageCode);
  messageCode = messageCode.join("").trim();
  console.log(messageCode);
}
let output = (document.getElementById("output-area").innerHTML =
  String(messageCode));
//   let messageCode.map(function(element){
//     return element + key;
//     console.log(messageCode)
//   })
// });
// }
//

//return nw character in output box
// console.log(element.charCodeAt() + element);

// let codedMessage = messageCode.forEach(function (element) {
//   console.log(element.charCodeAt() + element);

// message code= ["A", "B"]
//Join array together= "AB"
//return in output box.

// let codedMessage = [];
//This pulls the key value from the key input box

// let newMessage = messageInput.split("");
// newMessage.forEach(function (element) {
//   document.write(element.charCodeAt() + element);
//   });
// }

//Function to get text input
// var messageInput = document.getElementById("message");
// var keyOutput = document.getElementById("key");
// var messageIndex = messageInput.indexOf;

// //Fucntion to get key input
// function keyInput() {
//   var keyOutput = document.getElementById("key");
//   console.log(keyOutput.value);
// }

// function changeText() {
//   document.getElementById("output-area").innerHTML = messageOutput.value;
// }

// console.log(newLetters);
// let alphabet = "abcdefghijklmnopqrsuvwxyz";

// key = 1;
// get numerical value for letters

// document.write(alphabet.codePointAt(0 + key));

// document.write("he"
