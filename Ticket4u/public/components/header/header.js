const header = document.getElementById("header-info");

if (!sessionStorage.getItem("user")) {
    header.innerHTML += `<span onclick="location.href='/public/login/login.html';" class="navbar-brand mb-0 h1 text-white">Entrar</span>`

} else {
    header.innerHTML += `<span onclick="location.href='';" class="navbar-brand mb-0 h1 text-white ml-5">${sessionStorage.getItem("user")}</span>`

}