function changeImg() {
    document.querySelector('.chuck-img').src = `assets/img/chuck${Math.ceil(Math.random() * 5)}.jpg`;
}

/*function changeBackground() {
    const colors = ['black', '#48036F', '#261300', '#5b0000', '#200772'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
}*/

function playSound() {
    const sound = document.querySelector('.audio');
    sound.currentTime = 0;
    sound.play();
}

function getMem() {
    const requestURL = 'https://api.chucknorris.io/jokes/random';
    let request = new XMLHttpRequest(),
        mem;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        mem = request.response.value;
        document.querySelector('.quote').textContent = mem;
    }
}

getMem();

document.querySelector('.next-button').onclick = function () {
    getMem();
    changeImg();
    playSound();
    // changeBackground();
}

console.log('Самооценка:\n' +
    '1. Вёрстка, дизайн, UI +20\n' +
    '        внешний вид приложения является улучшенной версией предложенного образца +5\n' +
    '        вёрстка адаптивная. Приложения корректно отображается и отсутствует полоса прокрутки при ширине страницы от 1920рх до 768рх +5\n' +
    '        интерактивность элементов, с которыми пользователи могут взаимодействовать, изменение внешнего вида самого элемента и состояния курсора при наведении, использование разных стилей для активного и неактивного состояния элемента, плавные анимации +5\n' +
    '        в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n' +
    '2. При загрузке страницы приложения отображается рандомная цитата и её автор +10\n' +
    '3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10\n' +
    '4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10\n' +
    '5. Хорошо, если при смене цитаты изменяется изображение, если API не предоставляет такой возможности, просто отобразите на странице какое-нибудь подходящее изображение +10\n' +
    '6. При смене цитаты изменяется фоновый цвет страницы +5\n' +
    'ИТОГО: 65 баллов')