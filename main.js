const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
  
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
const professionElement = document.getElementById("profession");
const professions = ["Web Developer", "Security Analyst", "Graphic Designer"];
let currentIndex = 0;
let currentText = "";
let isErasing = false;
let charIndex = 0;
let typingSpeed = 100; // Adjust typing speed as needed

function type() {
    if (currentIndex >= professions.length) {
        currentIndex = 0;
    }

    const fullText = professions[currentIndex];

    if (isErasing) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    professionElement.textContent = currentText;

    if (!isErasing && currentText === fullText) {
        isErasing = true;
    } else if (isErasing && currentText === "") {
        isErasing = false;
        currentIndex++;
    }

    setTimeout(type, typingSpeed);
}

type();
// Add hover effect to nav menu items
const navItems = document.querySelectorAll('.nav__item');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Add your hover effect styles here
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.3s';
  });

  item.addEventListener('mouseleave', () => {
    // Remove the hover effect styles here
    item.style.transform = 'scale(1)';
  });
});
// Add a class to trigger the floating effect
const homeData = document.querySelector('.home__data');
const homeImg = document.querySelector('.home__img');

homeData.addEventListener('mouseenter', () => {
  homeData.classList.add('float');
});

homeData.addEventListener('mouseleave', () => {
  homeData.classList.remove('float');
});

homeImg.addEventListener('mouseenter', () => {
  homeImg.classList.add('float');
});

homeImg.addEventListener('mouseleave', () => {
  homeImg.classList.remove('float');
});



navButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    // Add your hover effect styles for buttons here
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.3s';
  });

  button.addEventListener('mouseleave', () => {
    // Remove the hover effect styles for buttons here
    button.style.transform = 'scale(1)';
  });
});
// Check if you are on the home page before applying the floating effect
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    // Add a class to trigger the floating effect for home page elements
    const homeData = document.querySelector('.home__data');
    const homeImg = document.querySelector('.home__img');
  
    homeData.addEventListener('mouseenter', () => {
      homeData.classList.add('float');
    });
  
    homeData.addEventListener('mouseleave', () => {
      homeData.classList.remove('float');
    });
  
    homeImg.addEventListener('mouseenter', () => {
      homeImg.classList.add('float');
    });
  
    homeImg.addEventListener('mouseleave', () => {
      homeImg.classList.remove('float');
    });
  }
  
