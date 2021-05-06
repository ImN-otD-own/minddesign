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