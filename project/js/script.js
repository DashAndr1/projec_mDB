/* Задания на урок:

+1) Удалить все рекламные блоки со страницы (правая часть сайта)
+2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
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
const removeBlock = (blocks) => {
    while (blocks.length > 0)
        blocks[0].remove();
};

removeBlock(promo[0].getElementsByTagName('img'));

//2

document.querySelectorAll('.promo__genre')[0].textContent = 'ДРАМА';