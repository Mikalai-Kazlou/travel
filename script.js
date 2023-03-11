// Variables

const btLogin = document.querySelector('.login');
const btMenu = document.getElementById('burger-menu-icon');

const loginPopUp = document.querySelector('.pop-up');
const loginForms = document.querySelectorAll('.login-form');

const linkAccounts = document.querySelectorAll('.account-link');
const linkNavigation = document.querySelectorAll('.navigation-link');

const menu = document.querySelector('.navigation-list');
const menuPopUp = document.querySelector('.pop-up-menu');

// PopUp's & Burger menu

function toggleLoginPopUp() {
  loginPopUp.classList.toggle('hidden');
  loginForms.forEach((form) => {
    form.classList.toggle('slide');
  });
}

function toggleLoginForm() {
  loginForms.forEach((form) => {
    form.classList.toggle('no-display');
  })
}

function toggleMenu() {
  if (btMenu.offsetWidth > 0 || btMenu.offsetHeight > 0) {
    menuPopUp.classList.toggle('hidden');
    menu.classList.toggle('navigation-list-slide');
  }
}

btLogin.addEventListener('click', () => {
  toggleLoginPopUp();
});

btMenu.addEventListener('click', () => {
  toggleMenu();
});

loginPopUp.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up')) {
    toggleLoginPopUp();
  }
});

menuPopUp.addEventListener('click', (event) => {
  toggleMenu();
});

linkAccounts.forEach((link) => {
  link.addEventListener('click', () => {
    toggleLoginForm();
  });
});

linkNavigation.forEach((link) => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

// Carusel

const carusel = document.querySelector('.destinations-container');
const elipses = document.querySelector('.elipse-container');

let i = 0;
const middleImageNumber = Math.floor(carusel.children.length / 2);
const points = Array.from(elipses.children);
const images = [];

for (item of carusel.children) {
  const image = item.querySelector('img');

  images.push({
    position: i,
    image: image,
    active: (i === middleImageNumber) ? true : false
  });

  i++;
}

function shiftCarusel(index) {
  if (index >= 0) {
    images.forEach(item => item.active = false);
    points.forEach(item => item.classList.remove('elipse-active'));

    const activeImage = images[index];
    activeImage.active = true;

    const activePoint = points[index];
    activePoint.classList.add('elipse-active');

    const width = 1700;
    carusel.style.marginLeft = `${width - activeImage.position * width}px`;
  }
}

carusel.addEventListener('click', (event) => {
  const index = images.findIndex(item => item.image === event.target);
  shiftCarusel(index);
});

elipses.addEventListener('click', (event) => {
  const index = points.findIndex(item => item === event.target);
  shiftCarusel(index);
});