var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/*  Looping through images */
for(let i = 1; i<=5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  newImage.onclick = function(e) {
  	let attribute = e.target.getAttribute('src');
  	display(attribute);
  }
  function display(attribute){
  	displayedImage.setAttribute('src', attribute);
  }
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
	let btnCheck = btn.getAttribute('class');
	if(btnCheck === 'dark'){
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	}
	else{
		btn.setAttribute('class', 'dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';	
	}
}

