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

function menuDrop() {
    var menu = document.getElementById("my-nav-menu");
    // var y = document.getElementById("btn-menu");
    if (menu.className === "nav-menu") {
        menu.className += " nav-menu-mobile";
        menu.style.width = "70%";
    } else {
        menu.className = "nav-menu";
    }

}




function lgDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/*footer menu dropdown*/
var x = document.getElementsByClassName('dropdown-footer');
var i;
for (i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function() {
        // var footerMenu = this.nextElementSibling;
        // if (footerMenu.style.display === "block") {
        //     // footerMenu.style.display = "none";
        //     footerMenu.toggleClass("");
        // } else {
        //     footerMenu.style.display = "block";
        // }

        $(this).next('.footer-menu').slideToggle("medium");

    });
}

window.onscroll = function() { scrollFunc() };

function scrollFunc() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("scroll-header").style.top = "0";
    } else {
        document.getElementById("scroll-header").style.top = "-200px";
    }
}



/*Slide show*/
var index = 1,
    slides = document.getElementsByClassName("slide"),
    i;
slideShow(index);

function slideFoward(n) {
    slideShow(index += n);
}

function slideCurrent(n) {
    slideShow(index = n);
}

function slideShow(n) {
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(slideShow, 3000);
}

/*----lightSlide------*/
$(document).ready(function() {
    $('#toeic, #ielts, #avgt').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        loop: true,
        speed: 400,
        auto: false,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    item: 4,
                    slideMargin: 20,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    item: 3,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    item: 2,
                    slideMargin: 4,

                }
            },
            {
                breakpoint: 676,
                settings: {
                    item: 1,
                    slideMargin: 4,

                }
            }
        ]
    });
    $('.lSNext').append('<i class="fas fa-chevron-right"></i>');
    $('.lSPrev').append('<i class="fas fa-chevron-left"></i>');
});