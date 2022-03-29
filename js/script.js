

var nav = document.querySelector(".header-top");
var bars = document.querySelector(".bars");
var ul = document.querySelector("ul")
var scrollTop = document.querySelector(".scrollToTop");

window.onscroll = function() {
	if(scrollY > 50) {
		nav.style.background = "#424242";
		nav.style.transition = "all 1s ease-in-out";
		nav.style.boxShadow = "0 2px 15px rgb(0 0 0 / 10%)";
	} else {
		nav.style.background = "transparent";
		nav.style.boxShadow = "none";
	}

	if(scrollY > 200) {
		scrollTop.style.right = "8px";
	} else {
		scrollTop.style.right = "-1000px";
	}



}

scrollTop.onclick = function(){
	document.documentElement.scrollTop = 0;
}


bars.onclick = function() {
	ul.classList.toggle("toggle");
	ul.style.transition = "all 0.8s ease-in-out";
}



var All = document.getElementById("All");
var App = document.getElementById("App");
var Card = document.getElementById("Card");
var Web = document.getElementById("Web");


var img1 = document.getElementById("img5-1");
var img2 = document.getElementById("img5-2");
var img3 = document.getElementById("img5-3");
var img4 = document.getElementById("img5-4");
var img5 = document.getElementById("img5-5");
var img6 = document.getElementById("img5-6");
var img7 = document.getElementById("img5-7");
var img8 = document.getElementById("img5-8");
var img9 = document.getElementById("img5-9");




All.onclick = function(){

	img1.style.display = "block";
	img2.style.display = "block";
	img3.style.display = "block";
	img4.style.display = "block";
	img5.style.display = "block";
	img6.style.display = "block";
	img7.style.display = "block";
	img8.style.display = "block";
	img9.style.display = "block";
}


App.onclick = function(){

	img1.style.display = "block";
	img2.style.display = "none";
	img3.style.display = "none";
	img4.style.display = "block";
	img5.style.display = "none";
	img6.style.display = "none";
	img7.style.display = "block";
	img8.style.display = "none";
	img9.style.display = "none";
}


Card.onclick = function(){

	img1.style.display = "none";
	img2.style.display = "none";
	img3.style.display = "block";
	img4.style.display = "none";
	img5.style.display = "none";
	img6.style.display = "block";
	img7.style.display = "none";
	img8.style.display = "none";
	img9.style.display = "block";
}


Web.onclick = function(){
	
	img1.style.display = "none";
	img2.style.display = "block";
	img3.style.display = "none";
	img4.style.display = "none";
	img5.style.display = "block";
	img6.style.display = "none";
	img7.style.display = "none";
	img8.style.display = "block";
	img9.style.display = "none";
}






var preloader = document.querySelector(".preLoader");

window.addEventListener("load" , load);

function load() {
	preloader.classList.add("hide");
}