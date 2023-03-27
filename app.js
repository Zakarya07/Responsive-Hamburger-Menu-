let burger_container=document.querySelector("div.burger_container");
let burger_icon=document.querySelector(".burger_container i");
let nav=document.querySelector(".nav_links");
let navLinks=document.querySelectorAll(".nav_links li");


burger_container.addEventListener("click",()=>{
    nav.classList.toggle("nav_active");
    setTimeout(() => {
        burger_icon.classList.toggle("fa-bars");
        burger_icon.classList.toggle("fa-times");
    }, 1000);
    navLinks.forEach((listItem,index) => {
             if (listItem.style.animation) {
                        listItem.style.animation=``;
        } else {
         listItem.style.animation=`appearFade 0.5s linear forwards ${index / 5 + 1}s`;
             }
    });
    
})
