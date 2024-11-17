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

const navBarList = document.querySelector('#navbar__list');
const navBarMenu = document.querySelector('.navbar__menu');
const sectionAll = document.querySelectorAll('section');
const classesArray = ["section", "your-active-class", "navBarMenu"];
const activeClass = document.querySelector('.your-active-class');



/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
/*window.activeClass(0,0);
*const makeCurrentSection = ()=> {

};*/


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

// creates function that adds li to navigation bar UL using Js 




const addToNav = () => {
    for (section of sectionAll) {
        const newListItem = document.createElement('li');
        const navLinks = document.createElement('a');
        newListItem.innerHTML = `<a class="menu__link" href="#${section.id}"> ${section.dataset.nav}</a>`;
        navBarList.appendChild(newListItem);

    }
};


// Trying to Build menu a different way, since it wasn't working before. I hope using document fragments work better.

/*const NavBuild = () => {
    const navFragment = document.createDocumentFragment();

    sectionAll.forEach(section => () {

        const listItem = document.createElement('li');
        const listLink = document.createElement('a');

        listLink.textContent = section.dataset.nav;
        link.href = `#${section.id}`;
        listLink.classList.add('menu__link');

        listItem.appendChild(link);
        navFragment.appendChild(listItem);

    };
    navBarList.appendChild(navFragment);
};
*/

addToNav();

// Scroll to section on link click
const sectionScroll = document.querySelectorAll('menu__link')


let moveToSection = () => {

    for (section in sectionAll) {
        const currentSection = window.scrollTo('section');

    }

    const sectionScrollLinks = document.querySelectorAll('.menu__link');

    sectionScrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });




};

// Trying to highlight active section


// Set sections as active


const setActiveSection = () => {
    sectionAll.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < 300) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    });
};
document.addEventListener('scroll', setActiveSection);
