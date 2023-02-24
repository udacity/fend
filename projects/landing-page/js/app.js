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
const sectionsInThePage = [...document.querySelectorAll('[data-nav]')];
const sectionsTitles = sectionsInThePage.map((section) => section.dataset.nav);
const navBarContainer = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const navBarLinksCreator = (linkTitlesArray=[]) => {
    /** map through the existing sections and create li for each section */
    const linksToBeAppended = linkTitlesArray.map((link, index) => {
        // get the section number to use it as a part of an id
        const sectionNumber = link.split(' ')[1];
        // create li
        const listItem = document.createElement('li');
        // set the innerHTML of the li to the relevant section title
        listItem.innerHTML = link;
        // if first li set an extra class to highlight it by default
        index == 0 ? 
            listItem.setAttribute('class','menu__link active-default') :
            listItem.setAttribute('class','menu__link');
        listItem.setAttribute('id',`link${sectionNumber}`);
        // add event listener to handle the click events
        listItem.addEventListener('click', () => scrollToHandler(`section${sectionNumber}`));
        // return the new created li element
        return listItem;
    });

    // call `navBarLinksAppendHandler` to append the li elements list
    navBarLinksAppendHandler(linksToBeAppended);
}

const scrollTopBtnCreator = () => {
    // create a btn and append it to the main
    const btn = document.createElement('button');
    btn.innerHTML = 'Scroll Top';
    btn.setAttribute('id','scroll-top');
    btn.setAttribute('class','scroll-top');
    btn.addEventListener('click', () => scrollTopHandler());
    document.querySelector('#main').appendChild(btn);
}

const showScrollTopBtn = () => {
    // if the user scroll more than 500px y axis then show the scroll-top btn
    const btn = document.querySelector('#scroll-top');
    window.scrollY > 500 ? btn.style.display = 'block' : btn.style.display = 'none';
}

const scrollToHandler = (elementID) => {
    // handles the click events of the nav bar li elements and scroll to the correct relevant position
    const element = document.querySelector(`#${elementID}`);
    const positionToScrollTo = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: positionToScrollTo,
        // scroll smoothly
        behavior: 'smooth'
    });
}

const scrollTopHandler = () => {
    // scroll to top when scroll-top btn is clicked
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

const navBarLinksAppendHandler = (linkElementsArray=[]) => {
    // append the li elements list inside `navBarContainer`
    navBarContainer.append(...linkElementsArray);
}

const isInViewport = (elements) => {
    // loop throw all existing sections to see which is in viewport
    const elementsVisibleState = elements.map((el) => {
        // convert section height to number
        const elementHeight = parseInt(window.getComputedStyle(el).height);
        /** calculate the visibility of the section based on its top and bottom position relative to viewport*/
        const elementVisibleState = el.getBoundingClientRect().top < 400 &&
            el.getBoundingClientRect().top > - (elementHeight - 400) &&
            el.getBoundingClientRect().bottom <= elementHeight + 400;
        
        /** get the relevant nav bar link */
        const relevantLink = document.querySelector(`#link${el.id.slice(-1)}`);
        /** add class when in viewport and remove it when out of it */
        elementVisibleState ? 
            (
                // if the section is in viewport set to active
                el.classList.add('your-active-class'),
                relevantLink.classList.add('active')
            ) : 
            (
                // if it is not in viewport remove the extra classes
                el.classList.remove('your-active-class'),
                setTimeout(() => relevantLink.classList.remove('active'),0)
            );
        
        return elementVisibleState;
    });

    // if no section is in viewport set the first to be active by default
    !elementsVisibleState.some((state) => state) ?
        (elements[0].classList.add('your-active-class'), document.querySelector(`#link${elements[0].id.slice(-1)}`).classList.add('active-default')) :
        document.querySelector(`#link${elements[0].id.slice(-1)}`).classList.remove('active-default');
}

document.addEventListener('scroll', () => {
    // listen on scroll to see which section is in viewport
    isInViewport(sectionsInThePage);
    // listen if the user scrolls on y axis to display scroll-top btn
    showScrollTopBtn();
}, {passive: true});

document.addEventListener('DOMContentLoaded', () => {
    // activate and call the creators functions on document ready
    navBarLinksCreator(sectionsTitles);
    scrollTopBtnCreator();
});

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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


