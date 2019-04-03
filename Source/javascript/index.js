
/*menu dropdown mobile*/
// function menuDrop(){
// 	var menu = document.getElementById("my-nav-menu");
// 	var y = document.getElementById("btn-menu");
// 	if(menu.className === "nav-menu"){
// 		menu.className += " nav-menu-mobile";
// 		y.style.background = "#cc0000";
// 	}else {
// 		menu.className = "nav-menu";
// 		y.style.background = "#000";
// 	}
// }

function menuDrop(){
	var menu = document.getElementById("my-nav-menu");
	// var y = document.getElementById("btn-menu");
	if(menu.className === "nav-menu"){
		menu.className += " nav-menu-mobile";
		menu.style.width = "60%";
	}else {
		menu.className = "nav-menu";
	}

}




function lgDrop(){
	document.getElementById("myDropdown").classList.toggle("show");
}

/*footer menu dropdown*/
var x = document.getElementsByClassName('dropdown-footer');
var i;
for(i = 0; i<x.length; i++){
	x[i].addEventListener('click', function(){
		var footerMenu = this.nextElementSibling;
		if(footerMenu.style.display === "block"){
			footerMenu.style.display = "none";
		}else {
			footerMenu.style.display = "block";
		}
	});
}

window.onscroll = function() {scrollFunc()};

function scrollFunc(){
	if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
		document.getElementById("scroll-header").style.top = "0";
	}else {
		document.getElementById("scroll-header").style.top = "-200px";
	}
}



/*Slide show*/
var index = 1,
	slides = document.getElementsByClassName("slide"),
	i;
slideShow(index);

function slideFoward (n){
	slideShow(index += n);
}

function slideCurrent(n){
	slideShow(index = n);
}

function slideShow(n){
	if(n > slides.length){
		index = 1;
	}
	if( n < 1){
		index = slides.length;
	}

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	index++;
	if(index > slides.length){
		index = 1;
	}
	slides[index - 1].style.display = "block";
	setTimeout(slideShow, 3000);
}