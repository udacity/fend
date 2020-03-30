let activeSection = null;


function addSectionIdToNavBar (section) {
    let navBar = document.querySelector('#navbar__list');
    let newlistElem = document.createElement('li');
    newlistElem.textContent = section.querySelector('h2').textContent;

    newlistElem.addEventListener('click', function () {
        section.scrollIntoView({behavior: "smooth"});
    });

    navBar.appendChild(newlistElem);
}

function addMouseOverEvent (section) {
    // Seeing if the mouse is over lets us know that this is the section being viewed.
    section.addEventListener('mouseover', function () {
        if (section !== activeSection && activeSection !== null) {
            activeSection.classList.toggle("your-active-class");
            activeSection = section;
        } else if (activeSection === null) {
            activeSection = section;
        }
        if (section.className !== "your-active-class") {
            // This is to avoid toggling the active class if it is already set.
            section.classList.toggle("your-active-class");
        }
    })
}

function buildNavigation () {
    let sections = document.querySelectorAll('section');
    sections.forEach(addSectionIdToNavBar);
    sections.forEach(addMouseOverEvent);
}

document.addEventListener('DOMContentLoaded', buildNavigation);
