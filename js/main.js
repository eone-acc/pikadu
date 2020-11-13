// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');


const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-singup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');
const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');

const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');

const userAvatarElem = document.querySelector('.user-avatar');

const postsWrapper = document.querySelector('.posts');

const buttonNewPost = document.querySelector('.button-new-post');
const addPostElem = document.querySelector('.add-post');



const listUsers = [{
    id: '01',
    email: 'demo@saures.ru',
    password: '12345',
    displayName: 'User1',
    photo: 'https://n1s2.hsmedia.ru/29/bc/13/29bc13428ff36a011701f7f79c9c1d4c/600x600_1_293cc71e720d7ea10893f01750f6de48@700x700_0xc0a839a2_19499559051479297076.jpeg'
  },
  {
    id: '02',
    email: 'mail2@mail.com',
    password: '12345',
    displayName: 'User2',
    photo: 'https://n1s2.hsmedia.ru/29/bc/13/29bc13428ff36a011701f7f79c9c1d4c/600x600_1_293cc71e720d7ea10893f01750f6de48@700x700_0xc0a839a2_19499559051479297076.jpeg'
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

  logOut(handler) {
    this.user = null;
    handler();
  },

  singUp(email, password, handler) {
    if (!this.getUser(email)) {
      console.log(email, password);
      const user = {
        email,
        password,
        displayName: email.split('@')[0]
      };
      console.log(user);
      listUsers.push(user)
      this.authorizedUser(user)
      handler();
    } else {
      alert('Уже зарегистрирован')
    }
  },

  editUsers(userName, userPhoto, handler) {
    if (userNameElem) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }
    handler();
  },

  getUser(email) {
    return listUsers.find(item => item.email === email)
  },

  authorizedUser(user) {
    this.user = user;
  }
};

const setPosts = {
  allPosts: [
    {
      title: 'Заголовлок поста',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: [
        'свежее',
        'новое',
        'горячее',
        'мое',
        'случайность'
      ],
      author: {displayName: 'demo', photo: 'https://i.pinimg.com/474x/ab/10/6c/ab106c26403eec0656dd0c419e503fbf.jpg'},
      date: '11.11.2020, 20:54:00',
      like: 15,
      comments: 4
    },
    {
      title: 'Заголовлок поста2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.  текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: [
        'свежее',
        'мое',
        'случайность'
      ],
      author: {displayName: 'user2', photo: 'https://n1s2.hsmedia.ru/29/bc/13/29bc13428ff36a011701f7f79c9c1d4c/600x600_1_293cc71e720d7ea10893f01750f6de48@700x700_0xc0a839a2_19499559051479297076.jpeg'},
      date: '10.11.2020, 20:54:00',
      like: 25,
      comments: 9
    }
  ]
}

const emailValidate = (email) => {
  const regExp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/
  console.log(regExp.test(email));
  return regExp.test(email)
}

const toggleAuthDom = () => {
  const user = setUsers.user;

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
    buttonNewPost.classList.add('visible');
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
    buttonNewPost.classList.remove('visible');
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
  }
}



const showAddPost = () => {
  addPostElem.classList.add('visible');
  postsWrapper.classList.remove('visible');
}

const showAllPosts = () => {

  let postHTML = '';

  setPosts.allPosts.forEach(({ title, text, date, author, comments, like, tags }) => {
    
    postHTML += `
        <section class="post">
        <div class="post-body">
          <h2 class="post-title">${title}</h2>
          <p class="post-text">${text}</p>
          <div class="tags">${
            tags.map((tag) => {
              return `<a href="#" class="tag">#${tag}</a>`
            }).join('')
          }
          </div>
          <!-- /.tags -->
        </div>
        <!-- /.post-body -->
        <div class="post-footer">
          <div class="post-buttons">
            <button class="post-button likes">
              <svg width="19" height="20" class="icon icon-like">
                <use xlink:href="img/icons.svg#like"></use>
              </svg>
              <span class="likes-counter">${like}</span>
            </button>
            <button class="post-button comments">
              <svg width="21" height="21" class="icon icon-comment">
                <use xlink:href="img/icons.svg#comment"></use>
              </svg>
                <span class="comments-counter">${comments}</span>
            </button>
            <button class="post-button save">
              <svg width="19" height="19" class="icon icon-save">
                <use xlink:href="img/icons.svg#save"></use>
              </svg>
            </button>
            <button class="post-button share">
              <svg width="17" height="19" class="icon icon-share">
                <use xlink:href="img/icons.svg#share"></use>
              </svg>
            </button>
          </div>
          <!-- /.post-buttons -->
          <div class="post-author">
            <div class="author-about">
              <a href="#" class="author-username">${author.displayName}</a>
              <span class="post-time">${date}</span>
            </div>
            <a href="#" class="author-link"><img src="${author.photo || "img/avatar.jpeg"}" alt="avatar" class="author-avatar"></a>
          </div>
          <!-- /.post-author -->
        </div>
        <!-- /.post-footer -->
      </section>
    `;
  })
  
  postsWrapper.innerHTML = postHTML
}

const init = () => {
  // отслеживаем клик по кнопке меню и запускаем функцию 
  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  });

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

  exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom)
  });

  editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });

  editContainer.addEventListener('submit', event => {
    event.preventDefault();

    setUsers.editUsers(editUsername.value, editPhotoURL.value, toggleAuthDom)
    editContainer.classList.remove('visible');
  });

  buttonNewPost.addEventListener('click', event => {
    event.preventDefault();
    showAddPost()
  });

  addPostElem.addEventListener('submit', event => {
    event.preventDefault();
    const { title, text, tags } = addPostElem.elements;
    


  })

  showAllPosts();
  toggleAuthDom();


}

document.addEventListener('DOMContentLoaded', () => {
  init();
})