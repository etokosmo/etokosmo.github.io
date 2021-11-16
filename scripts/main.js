var myImage = document.querySelector('img');
var myh1 = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Pomeranian.jpg') {
      myImage.setAttribute ('src','images/image-firefox.jpg');
      myImage.setAttribute ('alt', 'Это вообще не шпиц, а корги');
      myh1.textContent = 'Это вообще не шпиц, а корги';
    } else {
      myImage.setAttribute ('src','images/Pomeranian.jpg');
      myImage.setAttribute ('alt', 'Маленький шпиц дурачится');
      myh1.textContent = 'Все и ничего о шпицах';
    }
}

var myButton = document.querySelector('button');
var myHeading2 = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Введите свое имя, пожалуйста: ');
  localStorage.setItem('name', myName);
  myHeading2.textContent = 'Добро пожаловать, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading2.textContent = 'Добро пожаловать, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
