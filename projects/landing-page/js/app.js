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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const ul = document.querySelector('#navbar__list');
const one = document.querySelector('#section1');
const two = document.querySelector('#section2');
const three = document.querySelector('#section3')

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
const link = function(text, id) {
    let li = document.createElement('li');
    li.innerHTML = `<a> ${text} </a>`;
    li.setAttribute('id', id)
    li.classList.add('menu__link');
    return li
}
const scrollY = function(start, old) {
    if (window.scrollY >= start.getBoundingClientRect().top && window.scrollY >= start.getBoundingClientRect().bottom === 16) {
        start.classList.add('your-active-class');
        old.classList.remove('your-active-class');
    } else {
        start.classList.add('your-active-class');
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav
ul.appendChild(link('Section 1', 'sec1'));
ul.appendChild(link('Section 2', 'sec2'));
ul.appendChild(link('Section 3', 'sec3'));
const sec1 = document.querySelector('#sec1');
const sec2 = document.querySelector('#sec2')
const sec3 = document.querySelector('#sec3')

// Add class 'active' to section when near top of viewport
// function scroll() {
//     document.addEventListener('scroll', function() {
//         scrollY(two, one)
//         scrollY(three, two)
//     })
// }

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
const mlink = function(sec, num) {
    sec.addEventListener('click', function() {
        window.scrollTo({
            // top: num.getBoundingClientRect().top,
            top: num.offsetTop,
            behavior: 'smooth'
        })
    })
}

mlink(sec1, one)
mlink(sec2, two)
mlink(sec3, three)
    // Set sections as active
scroll()