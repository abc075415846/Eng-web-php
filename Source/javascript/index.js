
/*menu dropdown mobile*/
function menuDrop(){
	var menu = document.getElementById("my-nav-menu");
	var y = document.getElementById("btn-menu");
	if(menu.className === "nav-menu"){
		menu.className += " nav-menu-mobile";
		y.style.background = "#cc0000";
	}else {
		menu.className = "nav-menu";
		y.style.background = "#000";
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
	if(document.body.scrollTop > 140 || document.documentElement.scrollTop > 140){
		document.getElementById("scroll-header").style.top = "0";
	}else {
		document.getElementById("scroll-header").style.top = "-200px";
	}
}

