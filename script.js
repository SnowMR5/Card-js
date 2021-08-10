 art_one = {
    element1: 'article',
    element2: 'img',
    element3: 'p',
    element4: 'button',
    id_card: 'card',
    id_p: 'paragra',
    id_butt: 'butt',
    img: 'img/fery.jpg',
    img2: 'img/cady.jpg',
    img3: 'img/audy.jpg',
    textCont: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis ipsam accusantium corporis omnis neque quis perferendis ut voluptatem autem, nobis eum facilis quos, unde laboriosam itaque voluptatibus! Voluptatum, atque.',
    textCont2: 'Send',
};

let _div = document.createElement('div');
let container = document.getElementById('container').appendChild(_div);
_div.id = 'gall';

let art_new = document.createElement(art_one.element1);
let img = document.createElement(art_one.element2);
let paragraph = document.createElement(art_one.element3);
let button = document.createElement(art_one.element4);
_div.appendChild(art_new);
art_new.appendChild(img).src = art_one.img;
art_new.appendChild(paragraph).textContent = art_one.textCont;
art_new.appendChild(button).id = art_one.id_butt;
art_new.id = art_one.id_card;
paragraph.id = art_one.id_p;
button.textContent = art_one.textCont2;

let art_new2 = document.createElement(art_one.element1);
let img2 = document.createElement(art_one.element2);
let paragraph2 = document.createElement(art_one.element3);
let button2 = document.createElement(art_one.element4);
_div.appendChild(art_new2);
art_new2.appendChild(img2).src = art_one.img2;
art_new2.appendChild(paragraph2).textContent = art_one.textCont;
art_new2.appendChild(button2).id = art_one.id_butt;
art_new2.id = art_one.id_card;
paragraph2.id = art_one.id_p;
button2.textContent = art_one.textCont2;

let art_new3 = document.createElement(art_one.element1);
let img3 = document.createElement(art_one.element2);
let paragraph3 = document.createElement(art_one.element3);
let button3 = document.createElement(art_one.element4);
_div.appendChild(art_new3);
art_new3.appendChild(img3).src = art_one.img3;
art_new3.appendChild(paragraph3).textContent = art_one.textCont;
art_new3.appendChild(button3).id = art_one.id_butt;
art_new3.id = art_one.id_card;
paragraph3.id = art_one.id_p;
button3.textContent = art_one.textCont2;

