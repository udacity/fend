/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navigation_list = document.querySelector("#nav_list");
const parts = document.querySelectorAll("part");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//ViewPort check
var viwecheck = function (elem) {
	var x = elem.getBoundingClientRect();
	return (
		x.top >= 5 &&
		x.left >= 5 &&
		x.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		x.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

//Active remove
function deactivateparts() {
    parts.forEach((element)=>{
        element.classList.remove("active");
    });
}

function navlinks_deactivation() {
    let Anchors = document.querySelectorAll(".nav__hyperlink");
    Anchors.forEach((element)=>{
        element.classList.remove("active-nav");
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
window.addEventListener('load', navbarcreation())


// Add class 'active' to section when near top of viewport
function activateCurrentpart(currentpart) {
    currentpart.classList.add("active");

    navlinksdeactivation();
    navlinksactivation(currentpart.getAttribute('id'));
}

function navlinksactivation(currentpartId) {
    let Anchors = document.querySelectorAll(".nav__hyperlink");
    //console.log(Anchors);
        Anchors.forEach((element)=>{
            if(element.getAttribute('href') == `#${currentpartId}`) {
                element.classList.add("active-nav");
            }
        });
}

// Scroll to anchor ID using scrollTO event

function clickscroll() {
    let Anchors = document.querySelectorAll(".nav__hyperlink");
    Anchors.forEach((element) => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(element.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
function navbarcreation() {
	parts.forEach((element)=>{
	    let items = document.createElement("li");
	    items.classList.add("navbar__list__item");
    	let partName = element.getAttribute("data-nav");
    	let currentpartId = element.getAttribute("id");
        items.innerHTML = `<a href="#${currentpartId}" class="nav__hyperlink">${partName}</a>`;
        navigation_list.appendChild(items);
    });
}


// Scroll to section on link click
clickscroll();

// Set sections as active
window.addEventListener('scroll', function (event) {
    parts.forEach((element)=>{
        //console.log(element);
        if (viwecheck(element)) {
            deactivateparts();
            activateCurrentpart(element);
            //console.log('In viewport!');
        } else if(window.scrollY==0) {
            deactivateparts();
            navlinksdeactivation();
            //console.log('No Change');
        }
    }, false);
});

