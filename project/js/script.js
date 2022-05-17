/* Задания на урок:

+1) Удалить все рекламные блоки со страницы (правая часть сайта)
+2) Изменить жанр фильма, поменять "комедия" на "драма"
+3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
+4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promo = document.getElementsByClassName('promo__adv');

//1
const removeBlocks = (blocks) => {
    let i = 0;
    while (blocks.length > 0 && i++ < 5){
        blocks[0].remove();
    }
};

removeBlocks(promo[0].getElementsByTagName('img'));

//2

document.querySelectorAll('.promo__genre')[0].textContent = 'ДРАМА';

//3
document.querySelectorAll('.promo__bg')[0].style.backgroundImage = "url('img/bg.jpg')";

//4
let movies = [...[], ...movieDB.movies];
movies.sort();

let films_block = document.querySelector('.promo__interactive-list');
films_block.innerHTML = '';

movies.forEach((film, i) => {
    films_block.innerHTML += 
    `<li class="promo__interactive-item">${i+1}. ${film}
    <div class="delete"></div>
    </li>`;
});

//5



    

