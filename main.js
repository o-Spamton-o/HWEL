// JAVASCRIPT EVENT LISTENERS

// var heading = document.getElementById("test");
// console.log(heading);
// var listItem = document.getElementById("list2");
// console.log(listItem);

// Greet

// Declare the function
function greet() {
  let name = prompt("Enter your name");
  alert(`Nice to meet you, ${name}`);
}

// greet();
// greet();
// greet();

document.getElementById("btn1").addEventListener("click", greet);

// EX. innerHTML

// event listener
document.getElementById("btn2").addEventListener("click", changeToDragon);

// event function
function changeToDragon() {
  document.getElementById("test").innerHTML = "All About Dragons";
  document.getElementById("intro-p").innerHTML =
    "Dragons would make the best pets. Let me tell you why...";
  // Change list item 1 to say "Smaug"
  document.getElementById("li1").innerHTML = "Smaug";
}

// Ex. Changing CSS from JS
// event listener
document.getElementById("btn3").addEventListener("click", changeStyle);

// event function
function changeStyle() {
  document.getElementById("li").style.fontFamily = "Papyrus";
  document.getElementById("body1").style.backgroundColor = "lightGreen";
}
var numb = Math.floor(Math.random() * 100);

document.getElementById("btn4").addEventListener("click", randomNumber);

function randomNumber() {
  alert(`${numb}`);
}

document.getElementById("btn5").addEventListener("click", changeToFamousDragon);

function changeToFamousDragon() {
  document.getElementById("li1").innerHTML = "The Ender Dragon";
  document.getElementById("li2").innerHTML = "Ice Dragon";
  document.getElementById("li3").innerHTML = "The Snaggletooth Dragon";
  document.getElementById("li4").innerHTML = "The Night Fury";
}

document.getElementById("btn6").addEventListener("click", changeLook);

function changeLook() {
  document.getElementById("body1").style.color = "#32612D";
  document.getElementById("body1").style.border = "2px solid";
}
