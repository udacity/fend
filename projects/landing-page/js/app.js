// Define Global Variables
const navMenu = document.querySelector('header .navbar ul');
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");
const navItemClasses = document.querySelectorAll('.nav-item');
const hamburger = document.querySelector(".hamburger");
const scrollTop = document.querySelector("body .scroll-top");
// End Global Variables

// Create 'li' items contain 'a' links based on Sections 'id' and 'sectionName' attribute
function creatMainMenu() {
    for (let sectionInner of sections) {
        let navLi = document.createElement('li');
        let navLink = document.createElement('a');
        navMenu.appendChild(navLi);
        navLi.appendChild(navLink);
        navLi.className = ['li-' + sectionInner.id + " nav-item"];
        navLink.className = 'nav-link';
        navLink.innerHTML = sectionInner.getAttribute("sectionName");
        navMenu.firstElementChild.classList.add("active");
    }
}

creatMainMenu();

// Add and remove 'active' class to Nav item when the Section appears or disapears in viewport
const navItems = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = 'li-' + section.getAttribute("id");
        }
    });

    navItems.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
})

// Activate scroll-top Btn to revert to top of page
function scrollToTop() {
    scrollTop.addEventListener("click", function (e) {
        window.scrollTo({
            top: 0, behavior: "smooth",
        });
        e.preventDefault();
    });
}

scrollToTop();

// Scroll to each Section when we click on the Nav items 
function ActiveSection() {
    for (let i = 0; i < navMenu.children.length; i++) {
        navMenu.children[i].addEventListener("click", function (e) {
            window.scrollTo({
                top: sections[i].offsetTop,
                behavior: "smooth",
            });
            closeMenu(navMenu.children[i]);
            e.preventDefault();
        });
    }
}

ActiveSection();

// This part is for small view ports when Hamburger button will appears and Nav menu disappears
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}