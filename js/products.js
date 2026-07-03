const filters=document.querySelectorAll(".filter");
const items=document.querySelectorAll(".product-item");

filters.forEach(btn=>{

btn.onclick=()=>{

document.querySelector(".filter.active").classList.remove("active");

btn.classList.add("active");

let value=btn.dataset.filter;

items.forEach(item=>{

if(value==="all"){

item.style.display="block";

}else{

item.style.display=item.classList.contains(value)?"block":"none";

}

});

};

});

const search=document.getElementById("searchInput");

search.addEventListener("keyup",()=>{

let text=search.value.toLowerCase();

items.forEach(item=>{

let title=item.querySelector("h3").innerText.toLowerCase();

item.style.display=title.includes(text)?"block":"none";

});

});