<<<<<<< HEAD
/**
 * Pirate King of Movies - Main JavaScript
 * Versão: 1.0
 */

// 
// UTILIDADES
// 

function sanitizeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function getElement(selector) {
  try {
    return document.querySelector(selector);
  } catch (error) {
    console.error(`Erro ao buscar elemento: ${selector}`, error);
    return null;
  }
}

function onElementReady(selector, callback) {
  const element = getElement(selector);
  if (element && typeof callback === 'function') {
    callback(element);
  }
}

// 
// NAVBAR - MENU MOBILE
// 

function initNavbarToggle() {
  onElementReady('.navbar__toggle', (toggle) => {
    const menu = getElement('.navbar__menu');
    if (!menu) return;

    toggle.addEventListener('click', () => {
      try {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;
        toggle.setAttribute('aria-expanded', newState);
        menu.classList.toggle('active', newState);
      } catch (error) {
        console.error('Erro ao alternar menu:', error);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
      }
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
      });
    });
  });
}

// 
// NAVBAR - SCROLL EFFECT
// 

function initNavbarScrollEffect() {
  onElementReady('.navbar', (navbar) => {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 80) {
            navbar.classList.add('navbar--scrolled');
          } else {
            navbar.classList.remove('navbar--scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  });
}

// 
// BUSCA
// 

function initSearch() {
  onElementReady('#search-input', (searchInput) => {
    const movies = [
      { id: 1, title: 'Batman', url: 'batman.html' },
      { id: 2, title: 'Superman', url: 'superman.html' },
      { id: 3, title: 'Flash', url: 'flash.html' },
      { id: 4, title: 'Homem-Aranha', url: 'homem-aranha.html' },
      { id: 5, title: 'Supernatural', url: 'supernatural.html' },
      { id: 6, title: 'Game of Thrones', url: 'got.html' },
      { id: 7, title: 'Modern Family', url: 'modern-family.html' },
      { id: 8, title: 'Lucifer', url: 'lucifer.html' },
    ];

    searchInput.addEventListener('input', (e) => {
      try {
        const query = sanitizeHTML(e.target.value.toLowerCase().trim());
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
          const title = card.querySelector('.card__title').textContent.toLowerCase();
          if (title.includes(query) || query === '') {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      } catch (error) {
        console.error('Erro na busca:', error);
      }
    });
  });
}

// 
// FOOTER - ANO ATUAL
// 

function updateFooterYear() {
  onElementReady('#year', (yearElement) => {
    try {
      yearElement.textContent = new Date().getFullYear();
    } catch (error) {
      console.error('Erro ao atualizar ano:', error);
    }
  });
}

// 
// NAVEGAÇÃO ATIVA
// 

function initActiveNavigation() {
  const navLinks = document.querySelectorAll('.navbar__link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 
// INICIALIZAÇÃO
// 

function init() {
  try {
    initNavbarToggle();
    initNavbarScrollEffect();
    initSearch();
    updateFooterYear();
    initActiveNavigation();
  } catch (error) {
    console.error('Erro na inicialização:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
=======
const menuButton = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", function () {

        menu.classList.toggle("active");

        const isOpen = menu.classList.contains("active");

        menuButton.setAttribute("aria-expanded", isOpen);

    });

>>>>>>> 060ad07949fb51fe2eff9d45d0859fe2ee7f1a7c
}