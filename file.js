let btnikon1 = document.getElementById('menu_button1');
let btnikon2 = document.getElementById('menu_button2');
let btnikon3 = document.getElementById('menu_button3');

btnikon1.addEventListener('click', showModal);
function showModal() {
    let modal = document.createElement('div');
    modal.classList.add('modal');

    modal.insertAdjacentHTML('afterbegin',`
    <div class="modal_content">
        <img class="modal_img" src="img/iconccc.png" alt="awd"></img>
        <button class="modal_button"></button>
    </div>`)

    document.body.appendChild(modal);
    let btnClose = document.querySelector(".modal_button");

    btnClose.addEventListener('click', wndClose);
    function wndClose() {
        modal.remove();
    } 
    

    document.addEventListener('keydown', function(evt) {
        if (evt.code  == "Escape") {
            modal.remove();
        }
    });
}

btnikon2.addEventListener('click', showModall);
function showModall() {
    let modal = document.createElement('div');
    modal.classList.add('modal');

    modal.insertAdjacentHTML('afterbegin',`
    <div class="modal_content">
        <img class="modal_img" src="img/logos.jpg" alt="awd"></img>
        <button class="modal_button"></button>
    </div>`)

    document.body.appendChild(modal);
    let btnClose = document.querySelector(".modal_button");

    btnClose.addEventListener('click', wndClose);
    function wndClose() {
        modal.remove();
    } 
    

    document.addEventListener('keydown', function(evt) {
        if (evt.code  == "Escape") {
            modal.remove();
        }
    });
}

btnikon3.addEventListener('click', showModalll);
function showModalll() {
    let modal = document.createElement('div');
    modal.classList.add('modal');

    modal.insertAdjacentHTML('afterbegin',`
    <div class="modal_content">
        <img class="modal_img" src="img/web.png" alt="awd"></img>
        <button class="modal_button"></button>
    </div>`)

    document.body.appendChild(modal);
    let btnClose = document.querySelector(".modal_button");

    btnClose.addEventListener('click', wndClose);
    function wndClose() {
        modal.remove();
    } 
    

    document.addEventListener('keydown', function(evt) {
        if (evt.code  == "Escape") {
            modal.remove();
        }
    });
}

let photos = [
        
    'img/olen1.jpg',
    'img/back3.jpg',
    'img/back2.jpg',
    'img/gal4.jpg',
    'img/oboitut.com_1509704307.jpg',
    'img/back4.jpg'
];

let button = document.querySelectorAll('.button');
let fullphoto = document.querySelector('.gallery__photo-full')
let ClickHandler = function (but, photo) {
but.addEventListener('click', function () {
fullphoto.src = photo;
});
};

for (let i = 0; i < button.length; i++) {
ClickHandler(button[i], photos[i]);
}

let header = document.querySelector('.header');
let header_links = document.querySelector('.header_top_links');
let btn_burger = document.querySelector('.burger-btn');
btn_burger.addEventListener('click', function(e) {
    btn_burger.classList.toggle('burger-btn_active');
    header_links.classList.toggle('header_top_links_active');
    header.classList.toggle('header_active');
});