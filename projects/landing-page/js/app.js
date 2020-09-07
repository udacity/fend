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
(function (global) {
    const pageSections = Array.from(
        document.querySelectorAll("section[data-nav]")
    );
    const navItemsContainer = document.querySelector("#navbar__list");
    const navAnchors = navItemsContainer.getElementsByTagName("a");
    let clickActive = false;


    /**
     * End Global Variables
     * Start Helper Functions
     * 
    */

    const removeClass = (klass, elems) => {
        Array.from(elems).forEach(elem => elem.classList.remove(klass))

    };

    const handleScroll = () => {
        if (clickActive) return;

        const activePageSection = pageSections.find(section => {
            const lowerRange = section.offsetTop;
            const upperRange = section.offsetTop + section.offsetHeight;
            const scrollPos = global.pageYOffset + 250;

            return scrollPos >= lowerRange && scrollPos <= upperRange;
        });
        let activeNavAnchor;

        removeClass("active-section", pageSections);
        removeClass("active", navAnchors);

        if (activePageSection) {
            activeNavAnchor = Array.from(navAnchors).find(
                anchor => anchor.getAttribute("href").slice(1) === activePageSection.id
            );

            activePageSection.classList.add("active-section");
            activeNavAnchor.classList.add("active");
        }
    };

    const handleClick = e => {
        e.preventDefault();
        clickActive = true;
        const targetElem = e.target;

        if (targetElem.nodeName === "A") {
            const target = targetElem.getAttribute("href").slice(1);
            const requestedPageSection = pageSections.find(
                section => section.id === target
            );

            removeClass("active-section", pageSections);
            removeClass("active", navAnchors);

            targetElem.classList.add("active");
            requestedPageSection.scrollIntoView({ behavior: "smooth" });
            requestedPageSection.classList.add("active-section");

            setTimeout(() => (
                clickActive = !clickActive
            ), 2000);
        }
    }

    /**
     * End Helper Functions
     * Begin Main Functions
     *
    */

    // build the nav
    const buildNavigationMenu = () => {
        const navItemsFragment = document.createDocumentFragment();

        pageSections.forEach(section => {
            const navItem = document.createElement("li");
            const linkItem = document.createElement("a");
            const sectionId = section.id;

            linkItem.textContent = section.dataset.nav;
            linkItem.classList.add("menu__link");
            linkItem.setAttribute("href", `#${sectionId}`);

            navItem.append(linkItem);
            navItemsFragment.append(navItem);
        });

        navItemsContainer.append(navItemsFragment);
    };

    /**
     * End Main Functions
     * Begin Events
     *
    */

    const attachEventListeners = () => {
        navItemsContainer.addEventListener("click", handleClick);
        global.addEventListener("scroll", handleScroll);
    };


    /**
     * End Events
     * Inititalize functions
     */
    buildNavigationMenu();
    attachEventListeners();
})(window);