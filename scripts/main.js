//image switcher code

let myImage=document.querySelector('img');

myImage.onclick=function(){
  let mySrc=myImage.getAttribute('src');
  if (mySrc==='images/PortraitDeLaJeuneFilleEnFeu.jpg'){
    myImage.setAttribute('src','images/PortraitDeLaJeuneFilleEnFeu.jpg');
  } else{
    myImage.setAttribute('src','images/PortraitDeLaJeuneFilleEnFeu.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Portrait De La Jeune Fille En Feu, ' + myName +' !';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}