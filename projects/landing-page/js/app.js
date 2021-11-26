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
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const selected = document.querySelectorAll("section");
const topBtn = document.querySelector("#moveToTop");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//check if the element is in view or not
function inViewport(sec) {
	let distance = sec.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight + 400 || document.documentElement.clientHeight )
	);
}

// build the navigation bar
function buildNav(sectionsArray){
	//build a fragment to construct the navbar in it
  let listFregmant = document.createDocumentFragment();
  sections.forEach(s=>{
    let li = document.createElement("li");
		li.innerHTML = `
			<a href="#${s.id}" class="menu__link" data-nav="${s.dataset.nav}">${s.dataset.nav}</a>
		`;
    listFregmant.appendChild(li);
  });
	// append the fragment to the navbar
  navList.appendChild(listFregmant);
}

// add active classes to the viewed section and it's corresponding navbar link
function showViewed(){
	// iterate through sections
	sections.forEach(s=>{
		//select nav link corresponding
    let selectedNav = document.querySelector(`[data-nav="${s.dataset.nav}"]`);
		// check which section is active and show it
		if(inViewport(s)){
      selectedNav.classList.add("selected");
      s.classList.add("your-active-class");
		}else{
      selectedNav.classList.remove("selected");
      s.classList.remove("your-active-class");
    }
	});
//show or hide the topBtn
createTopBtn();
}

function createTopBtn(){
	// hide the topBtn in the top of the page & show it in the rest of the page
  if(document.documentElement.scrollTop > 400){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }
}

// scroll to the top of the page
function moveToTop(){
  document.documentElement.scrollTop = 0;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNav(sections);
// Scroll to section on link click
document.addEventListener("scroll", showViewed);
// add listener to capture
topBtn.addEventListener("click", moveToTop);

/**
 * End Main Functions
 * 
*/