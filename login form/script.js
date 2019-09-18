var checkbox = document.getElementById('checkbox');
var container = document.getElementById('container');
var fblogin = document.getElementById('fblogin');

container.addEventListener("click", function(){
	checkbox.style.backgroundColor = "white";
})

fblogin.addEventListener("click", function() {
	window.open('https://www.facebook.com');
});