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
const classesArray = [section, your-active-class, navBarMenu];
const activeClass = document.querySelector(.your-active-class);



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
window.activeClass(0,0);
const makeCurrentSection = ()=> {

}

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
       newListItem.innerHTML= `<a href="#${section.id}" class = "menu__link"> ${section.dataset.nav}</a>`; 
       navBarList.appendChild(newListItem);
    }
    navBarMenu.appendChild(navBarList);
}


// Build menu 

addToNav();

// Scroll to section on link click
const sectionScroll = document.querySelectorAll('menu__link') 


let moveToSection =() => {

for (section in sectionAll) { 
    const currentSection = window.scrollTo('section');
    
}

sectionScroll.addEventListener('click', moveToSection);




};

// Set sections as active


sectionAll = Active