// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-singup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');


const listUsers = [
  {
    id: '01',
    email: 'demo@saures.ru',
    password: '12345',
    displayName: 'User1'
  },
  {
    id: '02',
    email: 'mail2@mail.com',
    password: '12345',
    displayName: 'User2'
  },
];

const setUsers = {
  user: null,

  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user)
      handler();
    } else {
      alert('Пользователь не найден!')
    }
  },

  logOut() {
    console.log('logOut');
  },

  singUp(email, password, handler) {
    if(!this.getUser(email)) {
      console.log(email, password);
      const user = {email, password, displayName: email.split('@')[0]};
      console.log(user);
      listUsers.push(user)
      this.authorizedUser(user)
      handler();
    } else {
      alert('Уже зарегистрирован')
    }
  },
  getUser(email) {
    return listUsers.find(item =>item.email === email)    
  },
  authorizedUser(user) {
    this.user = user;
  }
};

const toggleAuthDom = () => {
  const user = setUsers.user;

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
}

const emailValidate = (email) => {
  const regExp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/
  console.log(regExp.test(email));
  return regExp.test(email)
}


loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value
  if (emailValidate(email)) {
    setUsers.logIn(email, password, toggleAuthDom);
  } else {
    alert('Введите корректный email')
  }
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value
  if (emailValidate(email)) {    
    setUsers.singUp(email, password, toggleAuthDom);
  } else {
    alert('Введите корректный email')
  }
});

toggleAuthDom()