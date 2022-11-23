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
const sections = document.querySelectorAll("section")
const list = document.getElementById("navbar__list")
const fragment = document.createDocumentFragment()


function buildNavigationbar() {
    for (const section of sections) {
        const title = section.getAttribute("data-nav") //data set nav
        const sectionId = section.getAttribute("id")
        const listItem = document.createElement("li")
        const link = document.createElement("a")

        link.classList.add("menu__link")
        link.href = `#${sectionId}`
        link.textContent = title
        //scroll smoothness
        link.addEventListener("click", e =>{
            e.preventDefault()
            section.scrollIntoView({
                behavior: "smooth",
                block: "nearest"      //

            })
        })
        listItem.appendChild(link)
        fragment.appendChild(listItem)

    }
    list.appendChild(fragment)


}
window.addEventListener("load",buildNavigationbar)
// Add class 'active' to section when near top of viewport
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0 //0.65

}
const links = document.querySelectorAll('a.menu__link')
const observerCallback = (entries) =>{
    if(entries[0].isIntersecting){
        entries[0].target.classList.add("your-active-calss")
        console.log(links)
        links.forEach(link =>{
            if(link.textContent === entries[0].target.dataset.nav ){
                link.classList.add('active')

            }else{
                link.classList.remove('active')

            }
        })
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav




// Scroll to anchor ID using scrollTO event
//const observer = new IntersectionObserver(observerCallback, observerOptions)
//window.addEventListener("scroll", ()=>{
  //  for (const section of sections){
    //    observer.observe(section)

    //}
//})



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
