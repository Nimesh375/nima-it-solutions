document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(sec => {

let top = window.scrollY;
let offset = sec.offsetTop - 500;

if(top > offset){
sec.classList.add("show");
}

});

});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.pageX + "px";
cursor.style.top = e.pageY + "px";

});