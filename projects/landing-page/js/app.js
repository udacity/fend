
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
const sectionsArr= Array.from(document.querySelectorAll('section'))
let sectionslength= sectionsArr.length 

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
function listItemCreator(){
    //create the items and add the link to it 
    for (x of sectionsArr){ 
        let container = document.createElement('li');
        container.innerHTML= `<a class='menu__link' href= '#${x.getAttribute('id')}'> ${x.getAttribute('data-nav')}</a>`
    // add the items to the navgation bar that's created by html under navbarlist 
    document.getElementById('navbar__list').appendChild(container)
    }
    }
// function to see if the section  exist in the visual viewport 
// Add class 'active' to section when near top of viewport

function portview (el){
    let y = el.getBoundingClientRect(); 
    return (y.top>=0);
}
// the function to control the apperance.
function toggleFun(){
    for (x of sectionsArr){
        if (portview(x)){
            if(!x.classList.contains('your-active-class')){
                x.classList.add('your-active-class'); 
            }
        }
        else {
                x.classList.remove('your-active-class');
            }
        
    }
}


listItemCreator();
// Scroll to anchor ID using scrollTO event

document.addEventListener('scroll',toggleFun()); 





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


