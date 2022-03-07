/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent=document.getElementById('skills_content'),
    skillsHeader=document.getElementById('.skills_header')

function toggleSkills(){
    let itemClass=this.parentNode.getElementByClassName
    for(i=0;i<skillsContent.length;i++)
    {
        skillsContent[i].className='skills_content skills_close'
    }
    if(itemClass==='skills_content skills_close'){
        this.parentNode.className='skills_content skills_open'
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 