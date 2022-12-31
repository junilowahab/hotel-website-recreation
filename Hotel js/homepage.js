let menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', openMenuBar);

let menuPage = document.getElementById('menu-page');

function openMenuBar() {
    if(menuPage.style.left = '-300px'){
        menuPage.style.left = '0px'
    }
}

let closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', closeMenuBar);

function closeMenuBar(){
    if(menuPage.style.left = '0px'){
        menuPage.style.left = '-300px'
    }
}

var i = 0;
var quotes = [];
var time = 3000;

quotes[0] = document.getElementById('Luke-Chan');
quotes[1] = document.getElementById('Marianne-Artouis');
quotes[2] = document.getElementById('Brienne Dutcher');
