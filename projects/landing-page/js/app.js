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
const sections = Array.from(document.getElementsByTagName("section"));

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

const link = function() {
    for (let section of sections) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        // use the section data-nav to fill the <a> tag
        a.innerHTML = section.dataset.nav;
        li.append(a);
        li.classList.add('menu__link');
        ul.appendChild(li);
    }
}

/**
 * @desc Loop over an li in the document and remove it's active class
 * @param $items - All the li in the document
 */
function removeSelected(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('menu__link-active');
    }
}

/**
 * @desc Loop over the sections in the document and remove it's active class
 * @param $items - All the sections in the document
 */
function removeSectionClass(items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].className == 'your-active-class') {
            items[i].classList.remove('your-active-class');
        }
    }
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav and add Scroll to anchor ID using scrollTO event
link()
const li = document.querySelectorAll('li')
const menu = () => {

    li.forEach((item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            removeSelected(li);
            this.classList.add('menu__link-active');
            for (let section of sections) {
                if (item.innerText == section.dataset.nav) {
                    window.scrollTo({
                        // top: num.getBoundingClientRect().top,
                        top: section.offsetTop,
                        behavior: 'smooth'
                    })
                }
            }
        });
    });
}

// Add class 'active' to section when near top of viewport
const scrollY = function() {
    document.addEventListener('scroll', function() {
        for (let section of sections) {
            if (section.getBoundingClientRect().top <= 443) {
                removeSectionClass(sections)
                section.classList.add('your-active-class');

                li.forEach((item) => {
                    if (item.innerText == section.dataset.nav) {
                        removeSelected(li);
                        item.classList.add('menu__link-active');
                    }
                })

            }
        }
    })
}



/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu and Scroll to section on link click
menu()
    // Set sections as active
scrollY()