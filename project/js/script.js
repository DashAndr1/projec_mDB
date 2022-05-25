/* Задания на урок:

+1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    + новый фильм добавляется в список. Страница не должна перезагружаться.
    + Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

+2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

+3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

+4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

+5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против всех"
    ]
};

let promo = document.getElementsByClassName('promo__adv');

const removeBlocks = (blocks) => {
    let i = 0;
    while (blocks.length > 0 && i++ < 5) {
        blocks[0].remove();
    }
};

removeBlocks(promo[0].getElementsByTagName('img'));
document.querySelectorAll('.promo__genre')[0].textContent = 'ДРАМА';
document.querySelectorAll('.promo__bg')[0].style.backgroundImage = "url('img/bg.jpg')";
updateFilmsList();

function updateFilmsList() {
    movieDB.movies.sort();

    let films_block = document.querySelector('.promo__interactive-list');
    films_block.innerHTML = '';

    movieDB.movies.forEach((film, i) => {
        films_block.innerHTML +=
            `<li class="promo__interactive-item" id="${i}">
            <span class="film_number">${i+1}.</span> 
            <div class="film_name">${getCorrectName(film, 21)}</div>
            <div class="delete"></div></li>`;
    });
    const deletes = films_block.querySelectorAll('.delete');
    deletes.forEach((element, i) => {
        element.addEventListener('click', clickAction);
    });
};

function getKey(arr, value){
    let res = -1;
    let i = 0;
    for(let val of arr){
        if(val.toUpperCase() == value.toUpperCase())
            return i;
        i++;
    }
    return res;
}

//_________________________________________________________________________________

//1
function clickAction(event) {
    const elementTypeName = (event.target.className == "") ? event.target.tagName : event.target.className;
    switch (elementTypeName) {
        case 'BUTTON': {
            if (event.target.parentNode.className == 'add') {
                event.preventDefault();
                movieDB.movies.push(event.target.parentNode.querySelector('.adding__input').value);
                updateFilmsList();
                event.target.parentNode.querySelector('.adding__input').value = "";    
            }
        }
        break;
        //3
        case 'delete': {
            event.preventDefault();
            movieDB.movies.splice(event.target.parentNode.id, 1);
            updateFilmsList();
        }
        break;
        case 'INPUT': {
            if(event.target.parentNode.className == 'add' && event.target.type == "checkbox"){
                //4
                if (event.target.checked) {
                    console.log("Добавляем любимый фильм");
                }
            }
        }
        break;

    default:
        break;
    }
};

const form_element = document.querySelector('.add');
const addFilmButton = form_element.querySelector('button');
addFilmButton.addEventListener('click', clickAction);

//2
function getCorrectName(str, numChar){
    return str.substr(0, numChar) + ((numChar < str.length) ? '...' : "");
}

//3

//4
const favorite = form_element.querySelector('input[type=checkbox]');
favorite.addEventListener('click', clickAction);