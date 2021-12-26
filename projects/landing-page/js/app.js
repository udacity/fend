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
const sections = Array.from(document.getElementsByTagName("section"));
const navlist = document.querySelector("#navbar__list");

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
sections.forEach(function (section) {
  //get the section name
  secName = section.getAttribute("data-nav");
  //create navlist elements
  listElement = document.createElement("li");
  //add <a> tag to listElement
  listElement.innerHTML = `<a class='menu__link' href='#${section.id}'>${secName}</a>`;
  //add listelement to navlist
  navlist.appendChild(listElement);
});

// Add class 'active' to section when near top of viewport
function classActive() {
  for (let section of sections) {
      //define destance between viewport and section
    const secBounding = section.getBoundingClientRect().top;
    if (secBounding >= 0) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
}
//add function classactive onscroll
document.addEventListener("scroll", classActive());

// Scroll to anchor ID using scrollTO event
const smooth = (document.querySelector("html").style.scrollBehavior = "smooth");

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
