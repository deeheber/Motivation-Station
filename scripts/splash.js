var mainAppDiv = document.getElementById('main-app');
var splashPageDiv = document.getElementById('splash-page');
var yesButton = document.querySelectorAll('button')[0];
var noButton = document.querySelectorAll('button')[1];

//when i click yes = show main app and hide splash page
var enterSite = function(){
  splashPageDiv.style.display = 'none';
  mainAppDiv.style.display = 'block';
}

//when i click no = alert box???
var noButtonPressed = function(){
  alert('Glad to hear you\'re properly motivated! Carry on.');
}


yesButton.addEventListener('click', enterSite);
noButton.addEventListener('click', noButtonPressed);
