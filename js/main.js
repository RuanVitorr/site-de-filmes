function getElement(selector) {
  try {
    return document.querySelector(selector);
  } catch (error) {
    console.error(`Erro ao buscar elemento: ${selector}`, error);
    return null;
  }
}

function initNavbarToggle() {
  const toggle = getElement('.navbar__toggle');
  const menu = getElement('.navbar__menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('active', !isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
    }
  });
}

function initSearch() {
  const searchInput = getElement('#search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    document.querySelectorAll('.card').forEach((card) => {
      const title = card.querySelector('.card__title')?.textContent.toLowerCase() || '';
      const text = card.querySelector('.card__text')?.textContent.toLowerCase() || '';
      card.hidden = query !== '' && !title.includes(query) && !text.includes(query);
    });
  });
}

function openCard(card) {
  const url = card.dataset.cardLink;
  if (!url) return;

  window.location.href = url;
}

function initClickableCards() {
  document.querySelectorAll('[data-card-link]').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      openCard(card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      if (event.target.closest('a, button')) return;

      event.preventDefault();
      openCard(card);
    });
  });
}

function updateFooterYear() {
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

function initActiveNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.navbar__link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const hrefPage = href.split('#')[0] || 'index.html';
    link.classList.toggle('active', hrefPage === currentPage);
  });
}

function getStoredUsers() {
  return JSON.parse(localStorage.getItem('pirateKingUsers') || '[]');
}

function saveStoredUsers(users) {
  localStorage.setItem('pirateKingUsers', JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('pirateKingSession') || 'null');
}

function showFormMessage(selector, message, type) {
  const messageElement = getElement(selector);
  if (!messageElement) return;

  messageElement.textContent = message;
  messageElement.className = `form__message form__message--${type}`;
}

function initRegistrationForm() {
  const form = getElement('#cadastro-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.nome.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const password = form.senha.value;
    const passwordConfirmation = form.confirmaSenha.value;

    if (!form.checkValidity()) {
      form.reportValidity();
      showFormMessage('#cadastro-mensagem', 'Preencha todos os campos corretamente.', 'error');
      return;
    }

    if (password !== passwordConfirmation) {
      showFormMessage('#cadastro-mensagem', 'As senhas precisam ser iguais.', 'error');
      form.confirmaSenha.focus();
      return;
    }

    const users = getStoredUsers();
    const existingUser = users.find((user) => user.email === email);

    if (existingUser?.password) {
      showFormMessage('#cadastro-mensagem', 'Este email ja esta cadastrado.', 'error');
      form.email.focus();
      return;
    }

    if (existingUser) {
      existingUser.name = name;
      existingUser.password = password;
      existingUser.updatedAt = new Date().toISOString();
    } else {
      users.push({
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
      });
    }

    saveStoredUsers(users);
    showFormMessage('#cadastro-mensagem', 'Cadastro realizado com sucesso. Voce ja pode fazer login.', 'success');
    form.reset();
  });
}

function initLoginForm() {
  const form = getElement('#login-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.email.value.trim().toLowerCase();
    const password = form.senha.value;

    if (!form.checkValidity()) {
      form.reportValidity();
      showFormMessage('#login-mensagem', 'Preencha email e senha corretamente.', 'error');
      return;
    }

    const user = getStoredUsers().find((storedUser) => (
      storedUser.email === email && storedUser.password === password
    ));

    if (!user) {
      showFormMessage('#login-mensagem', 'Email ou senha incorretos.', 'error');
      form.senha.focus();
      return;
    }

    localStorage.setItem('pirateKingSession', JSON.stringify({
      name: user.name,
      email: user.email,
      loggedAt: new Date().toISOString(),
    }));

    showFormMessage('#login-mensagem', `Bem-vindo, ${user.name}.`, 'success');
    form.reset();

    window.setTimeout(() => {
      window.location.href = 'index.html';
    }, 700);
  });
}

function initAuthNavigation() {
  const currentUser = getCurrentUser();
  const loginLinks = document.querySelectorAll('[data-auth-link]');

  loginLinks.forEach((link) => {
    if (!currentUser) return;

    link.textContent = 'Sair';
    link.href = '#sair';
    link.title = `Logado como ${currentUser.name}`;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      localStorage.removeItem('pirateKingSession');
      window.location.href = 'login.html';
    });
  });
}

function init() {
  initNavbarToggle();
  initSearch();
  initClickableCards();
  updateFooterYear();
  initActiveNavigation();
  initRegistrationForm();
  initLoginForm();
  initAuthNavigation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
