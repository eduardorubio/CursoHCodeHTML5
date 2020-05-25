document.querySelector('#form-login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const json = {
    email,
    password,
  };
  if (!json.email) {
    console.log('O campo e-mail deve ser preenchido!');
  } else if (!json.password) {
    console.log('O campo password deve ser preenchido!');
  } else {
    console.info('Dados validados com sucesso!');
  }
});
