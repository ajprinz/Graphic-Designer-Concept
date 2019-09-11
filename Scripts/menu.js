//Adam Prinz
//adamprinz.com


//Navigation script for slide-in-right menu

var menubtn= document.getElementById('menu-btn');
var item = document.querySelectorAll('nav ul li');
var ul = document.querySelectorAll('nav ul');
var on = 1;



menubtn.onclick = function perform() {
    
    //slide in the list items
    if (on == 1) {

        //add animation class to the hamburger menu
        menubtn.setAttribute('class', 'open');
        
        //Un-hide the nav ul element (it blocks links underneath otherwise)
        ul[0].style.display = "block";
        
        //slide in all nav items
        var i = 0;
        function loop() {
            item[i].setAttribute('class', 'menu-item');
            if (i++ < item.length - 1) {
                setTimeout(loop, 150);
            }
        }

        setTimeout (loop, 10);

        on = 0;

    } else {


        //add animation class to the hamburger menu
        menubtn.removeAttribute('class', 'open');

        //slide out all nav items
        var i = 0;
        function loop() {
            item[i].removeAttribute('class', 'menu-item');
            if (i++ < item.length - 1) {
                setTimeout(loop, 150);
            }
        }

        loop();
        on = 1; 

        
        //hide the nav ul element (it blocks links underneath otherwise)
        setTimeout(function hide() {  
            ul[0].style.display = "none";
        } , 2000);

        
    }
    
}

//Make header background black
window.onscroll = function() {

    var header = document.querySelector("header");
    var neon = document.querySelector("#intro h2");
    var tagline = document.querySelector("#intro h3");
    var body = document.body.scrollTop;
    
    if (body >= 680) {

        header.style.background = "#000";
        h1.style.display = "block";
        neon.style.display = "none";
        tagline.style.display = "none";

    } else if (window.innerWidth <= 500) {

        header.style.background = "#000";
        h1.style.display = "block";
        neon.style.display = "none";
        tagline.style.display = "none";

    } else {

        header.style.background = "transparent";
        h1.style.display = "none";
        neon.style.display = "inline-block";
        tagline.style.display = "inline-block";
    }
}

//Smooth scroll for menu item selection
var h1 = document.querySelector("h1");
var menuItem = document.querySelectorAll("nav ul li");


h1.onclick = function () {
    
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });

}

menuItem[0].onclick = function () {

    var work = document.querySelector("#work").scrollIntoView({ behavior: 'smooth' });

}

menuItem[1].onclick = function () {
    
    var about = document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });

}

menuItem[2].onclick = function () {

    var contact = document.querySelector("#contact").scrollIntoView({ behavior: 'smooth' });

}


