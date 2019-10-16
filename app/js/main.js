var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    cellSelector: '.carousel-item',
    prevNextButtons: false,
    pageDots: false,
    groupCells: true,
    groupCells: 3
});

var elem = document.querySelector('.carousel-2');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    cellSelector: '.carousel-item-2',
    prevNextButtons: false,
    pageDots: false,
    groupCells: true,
    groupCells: 3
});

var elem = document.querySelector('.carousel-3');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    cellSelector: '.carousel-item-3',
    prevNextButtons: false,
    pageDots: false,
    groupCells: true,
    groupCells: 3
});


let contact = document.getElementById('contacts');
let ctcbtn = document.getElementById('showcont');
ctcbtn.onclick = function (event) {
    contact.classList.toggle("contacts-open");
    event.preventDefault();
};

let menu = document.getElementsByClassName('menu');
let showmenu = document.getElementById('menu');
menu[0].onclick = function (event) {
    event.preventDefault();
        showmenu.classList.toggle("menu-open");
};
menu[1].onclick = function (event) {
    event.preventDefault();
        showmenu.classList.toggle("menu-open");
};