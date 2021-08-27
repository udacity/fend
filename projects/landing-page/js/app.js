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
/*const sectionNodes = document.querySelectorAll('[id^="section"]');
let sectionNames = [];

for(const value of sectionNodes.values()) {
    sectionNames.push(value.getAttribute('data-nav')); 
  }
*/
let sectionArray = [];


for(const value of document.querySelectorAll('[id^="section"]')) {
    //sectionNames.push('<li>' + value.getAttribute('data-nav') + '</li>'); 
    sectionArray.push([value.getAttribute('id'),value.getAttribute('data-nav')]); 
  }
console.log(sectionArray);


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
const navMenu = document.getElementById('navbar__list');
console.log(navMenu);
const navFrag = document.createDocumentFragment();
for (section of sectionArray){
  const navList = document.createElement('li');
  const navTag = document.createElement('a');
  navTag.href = '#' + section[0];
  navTag.textContent = section[1];
  navList.appendChild(navTag);
  navFrag.appendChild(navList);
}
console.log(navFrag);
navMenu.appendChild(navFrag);
console.log(navMenu);



// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(sectionNodeList){
  sectionNodeList.forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
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

// Scroll to section on link click
scrollToAnchor(document.querySelectorAll('a[href^="#"]'));


// Set sections as active


