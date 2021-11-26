

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");


function toggleMenu() {
 if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
   closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
   closeIcon.style.display = "block";
   menuIcon.style.display = "none";
 }
}

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("onmouseover",toggleMenu);

menuItems.forEach(
  function(menuItem){
   menuItem.addEventListener('click', toggleMenu);
 });

// function bgColor() {
// document.getElementById('textRed').style.backgroundColor = 'red';
// document.getElementById('textBlue').style.backgroundColor = 'blue';
// document.getElementById('textYellow').style.backgroundColor = 'yellow';
// document.getElementById('textGreen').style.backgroundColor = 'green';
// document.getElementById('textOrange').style.backgroundColor = 'orange';
// document.getElementById('textPurple').style.backgroundColor = 'purple';
// }

const home = document.getElementById('textHome');
const homeInput = document.getElementById('inputHome');
function setLightBlue () {
  document.body.style.backgroundColor="lightblue";
  console.log('click home');
  homeInput.checked = true;
}
home.addEventListener('click', setLightBlue);
homeInput.addEventListener('click', setLightBlue);

const red = document.getElementById('textRed');
const redInput = document.getElementById('inputRed');
function setRed () {
  document.body.style.backgroundColor="red";
  console.log('click red');
 redInput.checked = true;
}
red.addEventListener('click', setRed);
redInput.addEventListener('click', setRed);

const yellow = document.getElementById('textYellow');
const yellowInput = document.getElementById('inputYellow');
function setYellow () {
  document.body.style.backgroundColor="yellow";
  console.log('click yellow');
 yellowInput.checked = true;
}
yellow.addEventListener('click', setYellow);
yellowInput.addEventListener('click', setYellow);

const orange = document.getElementById('textOrange');
const orangeInput = document.getElementById('inputOrange');
function setOrange () {
  document.body.style.backgroundColor="orange";
  console.log('click orange');
 orangeInput.checked = true;
}
orange.addEventListener('click', setOrange);
orangeInput.addEventListener('click', setOrange);

const blue = document.getElementById('textBlue');
const blueInput = document.getElementById('inputBlue');
function setBlue () {
  document.body.style.backgroundColor="blue";
  console.log('click blue');
 blueInput.checked = true;
}
blue.addEventListener('click', setBlue);
blueInput.addEventListener('click', setBlue);

const purple = document.getElementById('textPurple');
const purpleInput = document.getElementById('inputPurple');
function setPurple () {
  document.body.style.backgroundColor="purple";
  console.log('click purple');
 purpleInput.checked = true;
}
purple.addEventListener('click', setPurple);
purpleInput.addEventListener('click', setPurple);
