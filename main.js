 
let nav = document.querySelector(".nav");
let header = document.querySelector("header");

let hoverHandler = function(e) {
    if(e.target.classList.contains("nav-link"))
    {
        let link = e.target;
        let siblings = link.closest(".nav").querySelectorAll(".nav-link");

        let logo = header.querySelector("#logo");

        siblings.forEach(el => {
            if(el !== link)
                el.style.opacity = this;
            
        });
        logo.style.opacity = this;
    }
}

nav.addEventListener("mouseover", hoverHandler.bind(0.5));
nav.addEventListener("mouseout", hoverHandler.bind(1));

//Tabbed Component 
let tabsContainer = document.querySelector("#tabs-container");
let tabs = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".content");

tabsContainer.addEventListener("click", function(e) {
    let clicked = e.target.closest(".tab");

    if(!clicked) return;

    tabs.forEach(tab => {
        tab.classList.remove("tab--active");
    });

    clicked.classList.add("tab--active");

    contents.forEach(content => {
        content.classList.remove("content--active");
    });

    document.querySelector(`.content-${clicked.dataset.tab}`).classList.add("content--active");
});

//Implement sticky navigation

