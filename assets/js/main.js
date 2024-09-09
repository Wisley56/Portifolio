const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===================== ACCORDION SKILLS ======================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.getElementsByClassName('skills__header');

function toggleSkills() {
    let content = this.parentNode;


    Array.from(skillsContent).forEach(content => {
        content.classList.remove('skills__open');
        content.classList.add('skills__close');
    });

    if (content.classList.contains('skills__close')) {
        content.classList.remove('skills__close');
        content.classList.add('skills__open');
    }
}

Array.from(skillsHeader).forEach(header => {
    header.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        // Remover a classe 'qualification__active' de todos os conteúdos
        tabContents.forEach(content => {
            content.classList.remove('qualification__active');
        });

        // Adicionar a classe 'qualification__active' ao conteúdo de destino
        target.classList.add('qualification__active');

        // Remover a classe 'qualification__active' de todos os botões de aba
        tabs.forEach(t => {
            t.classList.remove('qualification__active');
        });

        // Adicionar a classe 'qualification__active' ao botão de aba clicado
        tab.classList.add('qualification__active');
    });
});

/*==================== PORTFOLIO SWIPER ====================*/
let swiper = new Swiper('.portfolio__container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true
    },
  });

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else { 
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(scrollUp) {
        if(this.scrollY >= 560) {
            scrollUp.classList.add('show-scroll');
         } else {
            scrollUp.classList.remove('show-scroll');
         }
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
