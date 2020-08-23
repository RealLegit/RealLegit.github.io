let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
        myImage.setAttribute('src', 'images/2.jpg');
    } else {
        myImage.setAttribute('src', 'images/1.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bunnies are cool, ' + myName;
}


if(!localStorage.getItem('name')) {
    setUserName();
} else {
    letstoredName = localStorage.getItem('name');
    myHeading.textContent = ('Bunnies are cool, ' + storedName);
}


myButton.onclick = function() {
    setUserName();
}