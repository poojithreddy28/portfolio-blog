// lib/portfolioScripts.js
import AOS from 'aos';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export function initPortfolioScripts() {
  if (typeof window === 'undefined') return; // Exit if running on server-side

  // Initialize after a small delay to ensure DOM is fully loaded
  setTimeout(() => {
    // AOS initialization
    AOS.init({
      once: true,
      offset: 10,
      duration: 600,
      easing: 'cubic-bezier(0.42, 0, 0.12, 1.28)'
    });

    // Sticky menu
    const handleScroll = () => {
      const menu = document.querySelector(".header");
      if (!menu) return;
      
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 32) {
        menu.classList.remove('sticky');
      } else {
        menu.classList.add('sticky');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // First check on page load
    if (window.pageYOffset >= 32) {
      const menu = document.querySelector(".header");
      if (menu) menu.classList.add('sticky');
    }
    
    // Smooth scroll
    document.querySelectorAll('.header .nav .nav-links a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: "start"
          });
        }
      });
    });
    
    // Back to top
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', function(e) {
        if (window.location.pathname === '/') {
          e.preventDefault();
          window.scrollTo({top: 0, behavior: 'smooth'});
        }
      });
    }
    
    // Active section
    const activateMenuItems = () => {
      const sections = document.querySelectorAll("section[id]");
      const navLi = document.querySelectorAll(".header .nav .nav-links li");
      
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 282) {
          current = section.getAttribute("id");
        }
      });
      
      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
    
    window.addEventListener('scroll', activateMenuItems);
    
    // Portfolio slider
    const swiperElement = document.querySelector('.swiper');
    if (swiperElement) {
      const numberOfSlides = document.querySelectorAll('.swiper-slide').length;
      new Swiper('.swiper', {
        loop: false,
        allowSlidePrev: numberOfSlides !== 1,
        allowSlideNext: numberOfSlides !== 1,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1151: {
            slidesPerView: 3,
            spaceBetween: 56,
          },
        },
        navigation: {
          nextEl: '.slider-navigation .next',
          prevEl: '.slider-navigation .prev',
        },
      });
    }
    
    // Experiences
    const companiesList = document.querySelector(".experience-section .companies-list");
    if (companiesList) {
      companiesList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
          if (window.innerWidth > 992) {
            const selector = document.querySelector(".experience-section .selector");
            if (selector) selector.style.top = e.target.offsetTop + 'px';
          }
          
          const activeItem = document.querySelector(".experience-section .companies-list li.active");
          if (activeItem) activeItem.classList.remove('active');
          
          e.target.classList.add('active');
          const targetTab = e.target.getAttribute('data-tab');
          
          if (targetTab) {
            const activeContent = document.querySelector(".experience-section .content.active");
            if (activeContent) activeContent.classList.remove('active');
            
            const newContent = document.getElementById(targetTab);
            if (newContent) newContent.classList.add('active');
          }
        }
      });
    }
  }, 200);
  
  // Cleanup function to remove event listeners when component unmounts
  return () => {
    window.removeEventListener('scroll', () => {});
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.removeEventListener('click', () => {});
    }
    document.querySelectorAll('.header .nav .nav-links a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click', () => {});
    });
    const companiesList = document.querySelector(".experience-section .companies-list");
    if (companiesList) {
      companiesList.removeEventListener('click', () => {});
    }
  };
}