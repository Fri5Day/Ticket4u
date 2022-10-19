let login_button = document.getElementById("botao_login");

async function login() {
    let email = document.getElementById("email");
    let senha = document.getElementById("password");

    let emailValue = email.value;
    let senhaValue = senha.value;

    let datas = {
        email : emailValue,
        password : senhaValue

    };

    if(emailValue == "" || senhaValue == ""){
        window.alert('Não pode haver EMAIL e/ou SENHA vazios');
        return;

    }

    let tokens = await request(datas, "login", 'POST');

    sessionStorage.setItem("accessToken", tokens.tokens.accessToken);
    sessionStorage.setItem("refreshToken", tokens.tokens.refreshToken);
    sessionStorage.setItem("user", tokens.user.email);

    let verify = sessionStorage.getItem("accessToken");
    
    if(verify == "undefined"){
        window.alert("Os dados são inválidos...");

    } else {
        window.location.href = "./../home/home.html";
    
    }
}

login_button.addEventListener("click", login);