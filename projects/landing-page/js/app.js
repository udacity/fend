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

//identify the list to populate the nav menu by it's id in the html
const navList = document.getElementById("navbar__list")

//find the list of sections and the total number to be added to the nav list
const pageSections = document.querySelectorAll("section")
const noOfSections = pageSections.length
/**
 * End Global Variables
*/



/**
 * Begin Main Functions
*/

// build the nav
function buildNav(){
    //loop through sections to find titles and add them to navList as list items
    for (let i = 1; i <= noOfSections; i++) {
        let section = `#section${i}`
        let sectionContent = document.querySelector(section)
        let sectionTitle = sectionContent.getAttribute("data-nav")
        let ListItem = document.createElement('li')
        ListItem.textContent=(sectionTitle)
        ListItem.classList.add("menu__link")
        ListItem.setAttribute("data-nav", section)
        navList.appendChild(ListItem)
    }
}


// Add class 'active' to section when near top of viewport
function isOnScreen(e) {
    const bounding = e.getBoundingClientRect()
    return (
        bounding.top >= 0
        && bounding.bottom <= window.innerHeight
    )
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav()

// Scroll to section on link click
navItems = navList.getElementsByTagName("li")
for (let i=1; i<=navItems.length; i++) {
    navItems[i-1].addEventListener('click', function (e) {
        let id = `#section${i}`
        let section = document.querySelector(id)
        section.scrollIntoView()
    });
}

 
// Set sections as active
window.addEventListener("scroll",
    function addClassActive(){
        for (let i=0; i < noOfSections; i++) {
            if (isOnScreen(pageSections[i])){
                pageSections[i].classList.add("your-active-class");
            } else { 
                pageSections[i].classList.remove("your-active-class");
            }
        }
    }
)

