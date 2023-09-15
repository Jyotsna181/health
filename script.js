let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}