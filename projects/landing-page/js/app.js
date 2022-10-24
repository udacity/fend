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
const viewPortWidth=window.innerWidth || document.documentElement.clientWidth;
const viewPortHight=window.innerHeight|| document.documentElement.clientHeight;



const lotsElement=document.querySelectorAll(".navList")
const element1=lotsElement[0]
element1.addEventListener("mouseover",function(){
    element1.style.backgroundColor="rgb(1,7,12)"
})
element1.addEventListener("mouseout",function(){
    element1.style.backgroundColor="rgb(4, 24, 42)"
})
const element2=lotsElement[1]
element2.addEventListener("mouseover",function(){
    element2.style.backgroundColor="rgb(1,7,12)"
})
element2.addEventListener("mouseout",function(){
    element2.style.backgroundColor="rgb(4, 24, 42)"
})
const element3=lotsElement[2]
element3.addEventListener("mouseover",function(){
    element3.style.backgroundColor="rgb(1,7,12)"
})
element3.addEventListener("mouseout",function(){
    element3.style.backgroundColor="rgb(4, 24, 42)"
})
const element4=lotsElement[3]
element4.addEventListener("mouseover",function(){
    element4.style.backgroundColor="rgb(1,7,12)"
})
element4.addEventListener("mouseout",function(){
    element4.style.backgroundColor="rgb(4, 24, 42)"
})



const ourFunction=function(object){
    const rect=object.getBoundingClientRect();
    if(
        rect.left>=0 &&
        rect.bottom<=viewPortHight&&
        rect.top>=0 &&
        rect.right<=viewPortWidth
    ) {
        object.style.backgroundColor="rgb(5, 53, 95)"

    }
    else(console.log("else"))

}
const sectionsAll=document.querySelectorAll(".section")
const section1=sectionsAll[0]
document.addEventListener("scroll",function(){
    const rect=section1.getBoundingClientRect();
    if(
        rect.left>=0 &&
        rect.bottom<=viewPortHight&&
        rect.top>=0 &&
        rect.bottom>0&&
        rect.right<=viewPortWidth
    ) {
        section1.style.cssText=("background-image:url(moresimple.jpg);color:white;font-size:xx-large;margin-bottom:400px")
        
    }
    else(
        section1.style.cssText=("background-image:url(moresimple.jpg);color:white;font-size:large;margin-bottom:400px")
    )
    

})
const section2=sectionsAll[1]
document.addEventListener("scroll",function(){
    const rect=section2.getBoundingClientRect();
    if(
        rect.left>=0 &&
        rect.bottom<=viewPortHight&&
        rect.top>=0 &&
        rect.bottom>0&&
        rect.right<=viewPortWidth

    ) {
        section2.style.cssText=("background-image:url(moresimple.jpg);color:white;font-size:xx-large;margin-bottom:400px")
        
    }
    else(
        section2.style.cssText=("background-image:url(moresimple.jpg);color:white;font-size:large;margin-bottom:400px")
    )
})
const section3=sectionsAll[2]
document.addEventListener("scroll",function(){
    const rect=section3.getBoundingClientRect();
    if(
        rect.left>=0 &&
        rect.bottom<=viewPortHight&&
        rect.bottom>0&&
        rect.top>=0&&
        rect.right<=viewPortWidth
    ) {
        section3.style.cssText=("background-image:url(moresimple.jpg);color:white;font-size:xx-large;margin-bottom:400px")
        
    }
    else(
        section3.style.cssText=("background-image:url(moresimple.jpg);color:white;font-size:large;margin-bottom:400px")
    )
})
const section4=sectionsAll[3]
section4.style.height=viewPortHight
document.addEventListener("scroll",function(){
    const rect=section4.getBoundingClientRect();
    if(
        rect.left>=0 &&
        rect.bottom<=viewPortHight&&
        rect.top>=0 &&
        rect.right<=viewPortWidth&&
        rect.bottom>0
    ) {
        section4.style.cssText=("background-image:url(moresimple.jpg);color:white;font-size:xx-large;margin-bottom:400px")
        
    }
    else(
        section4.style.cssText=("background-image:url(moresimple.jpg);color:white;font-size:large;margin-bottom:400px")
    )

})

