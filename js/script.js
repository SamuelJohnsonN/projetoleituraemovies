let botao_menu = document.getElementsByClassName('btn-menu');
let botao_fechar_menu = document.getElementsByClassName('btn-close');
let menu = document.getElementsByClassName('menus');

botao_menu[0].addEventListener('click', clicou_menu);
botao_fechar_menu[0].addEventListener('click', fechou_menu);

function clicou_menu() {
    menu[0].style.display = "block";
};

function fechou_menu() {
    menu[0].style.display = "none";
};





