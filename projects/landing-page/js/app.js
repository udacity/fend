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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function addSectionIdToNavBar (section) {
    // navBar.section.attributes.id;
    let navBar = document.querySelector('#navbar__list');  // I hate that this is in the outermost level
    let newlistElem = document.createElement('li');
    newlistElem.textContent = section.querySelector('h2').textContent;
    console.log("scrolling into view.");

    newlistElem.addEventListener('click', function () {
        section.scrollIntoView({behavior: "smooth"});
    });

    navBar.appendChild(newlistElem);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNavigation () {
    let sections = document.querySelectorAll('section');
    sections.forEach(addSectionIdToNavBar);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


