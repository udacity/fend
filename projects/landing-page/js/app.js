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



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navbar = document.createDocumentFragment();
for(let i = 0; i < 4; i++){
    const list_item = document.createElement('li');
    const list_link = document.createElement('a');
    list_link.href = `#section${i+1}`;
    list_link.innerHTML = `Section ${i+1}`;
    list_link.style.color = '#fff';
    list_item.appendChild(list_link);
    navbar.appendChild(list_item);
}
document.querySelector('#navbar__list').appendChild(navbar);

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


