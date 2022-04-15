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
const four = document.querySelector('#section4')

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/**
 * @desc create a list for the nav-bar ul
 * @param $text - The name of the section
 * @param $id - Assign an id to the li
 */
const link = function(text, id) {
        let a = document.createElement('a');
        let li = document.createElement('li');
        a.innerHTML = `${text.dataset.nav}`;
        li.append(a)
        li.setAttribute('id', id)
        li.classList.add('menu__link');
        return li
    }
    /**
     * @desc Assign an active class to section as you scroll
     * @param $start - The section visible in the viewport
     * @param $old - The last section
     */
const scrollY = function(start, old) {
        if (start.getBoundingClientRect().top <= 443) {
            start.classList.add('your-active-class');
            old.classList.remove('your-active-class');
        } else {
            start.classList.remove('your-active-class');
        }
    }
    /**
     * @desc Create a scrollTo link to each section
     * @param $sec - The name of the section
     * @param $num - The id of the li
     */
const secLink = function(sec, num) {
        sec.addEventListener('click', function() {
            window.scrollTo({
                // top: num.getBoundingClientRect().top,
                top: num.offsetTop,
                behavior: 'smooth'
            })
        })
    }
    /**
     * End Helper Functions
     * Begin Main Functions
     * 
     */


// build the nav
const menu = () => {
    ul.appendChild(link(one, 'sec1'));
    ul.appendChild(link(two, 'sec2'));
    ul.appendChild(link(three, 'sec3'));
    ul.appendChild(link(four, 'sec4'));
    const sec1 = document.querySelector('#sec1');
    const sec2 = document.querySelector('#sec2');
    const sec3 = document.querySelector('#sec3');
    const sec4 = document.querySelector('#sec4')
}

// Add class 'active' to section when near top of viewport
const scroll = () => {
    document.addEventListener('scroll', function() {
        scrollY(one, four);
        scrollY(two, one);
        scrollY(three, two);
        scrollY(four, three);
    })
}

// Scroll to anchor ID using scrollTO event
const clickLink = () => {
        secLink(sec1, one);
        secLink(sec2, two);
        secLink(sec3, three);
        secLink(sec4, four);
    }
    /**
     * End Main Functions
     * Begin Events
     * 
     */

// Build menu 
menu()
    // Scroll to section on link click
clickLink()
    // Set sections as active
scroll()