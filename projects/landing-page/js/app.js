
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
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const navBar = document.getElementById("navbar_list");
const header = document.querySelector(".page_header");
const topScroll = document.querySelector(".top-Scroll");
const fragment = document.createDocumentFragment();

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
for (let i=0; i < sections.length; i++) {
  const liElement = document.createElement('li');

  liElement.innerText = sections[i].dataset.nav;
  liElement.href= sections[i].id;
  liElement.dataset.id = sections[i].id;

  fragment.appendChild(liElement);
}
navBar.appendChild(fragment);

// Add class 'active' to section when near top of viewport
function changeActive(actions) {
  for(const active of actions) {
    let navEl = document.querySelector('[data-id="'+ active.target.id+'"]');

    if(active.isIntersecting == true) {
      active.target.classList.add('your-active-class');
      navEl.classList.add('your-active-class');
    } else {
      active.target.classList.remove('your-active-class');
      navEl.classList.remove('your-active-class');
    }
  }
}


const observer = new IntersectionObserver(changeActive,{threshold:0.5});

for(const section of sections) {
  observer.observe(section);
}

// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click',function(evnt) {

  evnt.preventDefault();
  console.log(evnt.target.href);
  let selected = document.getElementById(evnt.target.href);
  selected.scrollIntoView({behavior:"smooth"});
  // });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to top
topScroll.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  });
});

// Build menu 

// Scroll to section on link click

// Set sections as active
