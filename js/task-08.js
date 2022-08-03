const refs = {
  loginForm: document.querySelector('.login-form'),
};

const createObj = (email, password) => ({
  email,
  password,
});

const formСheckHandler = e => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  email.value === '' || password.value === ''
    ? alert(`Увага! Всі поля мають бути заповнені.`)
    : console.log(createObj(email.value, password.value));

  e.currentTarget.reset();
};

refs.loginForm.addEventListener('submit', formСheckHandler);

// варіант 2 (залишила для себе)==============================================
// const refs = {
//   loginForm: document.querySelector('.login-form'),
// };

// const user = {
//   email: '',
//   password: '',

//   getUser() {
//     console.log(this);
//   },

//   enterUserData(email, password) {
//     this.email = email;
//     this.password = password;
//   },
// };

// const formСheckHandler = e => {
//   e.preventDefault();

//   const { email, password } = e.currentTarget;

//   email.value === '' || password.value === ''
//     ? alert(`Увага! Всі поля мають бути заповнені.`)
//     : user.enterUserData(email.value, password.value);

//   user.getUser();

//   e.currentTarget.reset();
// };

// refs.loginForm.addEventListener('submit', formСheckHandler);
