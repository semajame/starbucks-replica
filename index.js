
// DESKTOP 
const menu = document.querySelector("#menu");
const closemenu = document.querySelector("#close");

// MEDIA
const active = document.getElementById("media-ul");
const close = document.getElementById("close");


// MENU ARROW
const menuarrow = document.querySelector("#menu-li");
const menuul = document.getElementById("menu-ul");

// FOOTERS
const footerabout = document.querySelector("#flex-about");

const footercareers = document.querySelector("#flex-careers")

const footersocial= document.querySelector("#flex-socials")

const footerbusiness = document.querySelector("#flex-business")

const footerorder = document.querySelector("#flex-order")

// BODY

const body = document.getElementById("body");


menu.onclick = function(){
    active.classList.toggle("active");
    close.classList.toggle("active");
    body.classList.toggle("active");
}

closemenu.onclick = function(){

    active.classList.remove("active");
    close.classList.remove("active");
    menuul.classList.remove("active");
    body.classList.remove("active");
}

footerabout.onclick = function(){

    const about = document.getElementById("ul-about");
    const arrow = document.querySelector(".arrow");

    about.classList.toggle("active");
    arrow.classList.toggle("active");
}

footercareers.onclick = function(){

    const careers = document.getElementById("ul-careers");
    const arrow2 = document.querySelector(".arrow2");

    careers.classList.toggle("active");
    arrow2.classList.toggle("active");
}

footersocial.onclick = function(){
    
    const socials = document.getElementById("ul-social")
    const arrow3 = document.querySelector(".arrow3");

    socials.classList.toggle("active");
    arrow3.classList.toggle("active");
}

footerbusiness.onclick = function(){

    const business = document.getElementById("ul-business")
    const arrow4 = document.querySelector(".arrow4");

    business.classList.toggle("active");
    arrow4.classList.toggle("active");
}

footerorder.onclick = function(){

    const order = document.getElementById("ul-order")
    const arrow5 = document.querySelector(".arrow5");

    order.classList.toggle("active");
    arrow5.classList.toggle("active");
}

menuarrow.onclick = function(){

    menuul.classList.toggle("active");

}

const backmenu = document.querySelector("#back-menu");

backmenu.onclick = function(){

    menuul.classList.remove("active");
}