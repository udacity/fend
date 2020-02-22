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
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const upButton = document.querySelector('#up-button');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function buttonAppear() {
    if (document.documentElement.scrollTop > 500) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {
    for (const section of sections) {
        const sectionName = section.dataset.nav;
        const sectionNum = section.id;
        const navHtml = `<li><a data-target="${sectionNum}" id="click" class="menu__link"> ${sectionName} </li>`;
        navList.insertAdjacentHTML('beforeend', navHtml);
    }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    const activeSection = document.querySelector('.your-active-class');
    // first 'if' in case active class has already been removed
    if (activeSection != null) {
        const activeLocation = activeSection.getBoundingClientRect();
        if (activeLocation.bottom < (window.innerHeight / 2)) {
            activeSection.classList.remove('your-active-class');
        }
    }
    for (let i=0; i<sections.length; i++) {
        let sect = document.querySelector(`#section${i+1}`);
        const sectionLoc = sect.getBoundingClientRect();
        if ((sectionLoc.top < (window.innerHeight / 2))
            && (sectionLoc.bottom > (window.innerHeight / 2))) {
            sect.classList.add('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollTO(evt) {
    const targetId = evt.target.dataset.target;
    const targetSection = document.querySelector(`#${targetId}`);
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
}    

function goToTop() {
    const scroll = document.scrollingElement;
    scroll.scrollTop = 0;
}

/*
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
navList.addEventListener('click', event => {
    scrollTO(event);
});

// Set sections as active
window.addEventListener('scroll', makeActive);


// Scroll to top
upButton.addEventListener('click', goToTop);

window.addEventListener('scroll', buttonAppear);


