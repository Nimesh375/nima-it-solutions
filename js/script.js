// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target.toLocaleString() + "+";

        }

    };

    update();
    const sections = document.querySelectorAll("section:not(.hero)");

});// Back To Top

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Dark Mode

const theme=document.getElementById("theme");

theme.onclick=function(){

document.body.classList.toggle("light");

};

// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menuBtn.onclick=()=>{

nav.classList.toggle("active");

};