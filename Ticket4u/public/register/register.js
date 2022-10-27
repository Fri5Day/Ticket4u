var cnpj = document.getElementById("1");
var user = document.getElementById("2");
var produtor = true;
const register = document.getElementById('cadastrar-button');
const button_juridica = document.getElementById('button-juridica');
const button_fisica = document.getElementById('button-fisica');

function juridica() {
   if (cnpj.style.visibility == "visible") {
      user.style.visibility = 'hidden';
   
   } else {
      cnpj.style.visibility = 'visible';
      user.style.visibility = 'hidden';
   
   }
   produtor = true
}

function fisica() {
   if (user.style.visibility == "visible") {
      cnpj.style.visibility = 'hidden';

   } else {
      cnpj.style.visibility = 'hidden';
      user.style.visibility = 'visible';

   }

   produtor = false;
}

document.getElementById('cnpj').addEventListener('input', function (e) {
   let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
   e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '/' : x[4]) + x[4] + (x[5] ? '-' + x[5] : '');

});

async function registerUser() {
   const email = document.getElementById('email').value.trim();
   const senha1 = document.getElementById('senha1').value.trim();
   const senha2 = document.getElementById('senha2').value.trim();
   const cnpj = document.getElementById('cnpj').value.trim();
   const nome = !produtor ? document.getElementById('name').value : document.getElementById('name_empresa').value;

   console.log("Email: ", "senha1: ", senha1, "senha2: ", senha2, "cnpj: ", cnpj, "nome: ", nome);
   sessionStorage.setItem('email', email);
   sessionStorage.setItem('senha1', senha1);
   sessionStorage.setItem('senha2', senha2);
   sessionStorage.setItem('cnpj', cnpj);
   sessionStorage.setItem('nome', nome);
   sessionStorage.setItem('produtor', produtor);

   if (!(senha1 == senha2)) {
      window.alert('Senha incoerente');
      return;
   }

   if (senha1 == '' || senha2 == '') {
      window.alert('O campo "senha" deve ser preenchido');
      return;
   }

   if (email == '') {
      window.alert('O campo "e-mail" deve ser preenchido');
      return;
   }

   const data = {
      name: nome, 
      email: email, 
      password: senha1, 
      CNPJ: cnpj, 
      producer: produtor
   }

   const tokens = await request(data, 'register', 'POST');

   sessionStorage.setItem('accessToken', tokens.tokens.accessToken);
   sessionStorage.setItem('refreshToken', tokens.tokens.refreshToken);
   sessionStorage.setItem("user", tokens.user.email);

   const verify = sessionStorage.getItem('accessToken');

   if (verify == 'undefined') {
      window.alert('Erro não identificado');

   } else {
      window.location.href = './../home/home.html'

   }
}

register.addEventListener('click', registerUser)
button_juridica.addEventListener('click', juridica)
button_fisica.addEventListener('click', fisica)