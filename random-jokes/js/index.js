let lang = localStorage.getItem('chacklang') || 'en';

function changeImg() {
    document.querySelector('.chuck-img').src = `assets/img/chuck${Math.ceil(Math.random() * 5)}.jpg`;
}

function playSound() {
    const sound = document.querySelector('.audio');
    sound.currentTime = 0;
    sound.play();
}

function getMem() {
    const requestURL = (lang === 'en') ? 'https://api.chucknorris.io/jokes/random' : './assets/json/quotes.json';
    let request = new XMLHttpRequest(),
        mem;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        mem = (lang === 'en') ?
            request.response.value :
            request.response[Math.floor(request.response.length * Math.random())].text;
        document.querySelector('.quote').textContent = mem;
    }
}

function setActiveLangSwitcher() {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`.${lang}`).classList.add('active');
}

setActiveLangSwitcher();
getMem();

document.querySelector('.lang-switcher').addEventListener('click', function (event) {
    if (event.target.classList.contains('en') ||
        event.target.classList.contains('ru')) {
        lang = event.target.textContent;
        localStorage.setItem('chacklang', lang);
        setActiveLangSwitcher();
        getMem();
    }
})

document.querySelector('.next-button').onclick = function () {
    getMem();
    changeImg();
    playSound();
}

console.log('Самооценка:\n' +
    '\n' +
    '1. Вёрстка +10\n' +
    '        на странице есть цитата и кнопка для смены цитаты +5\n' +
    '        в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n' +
    '2. При загрузке страницы приложения отображается рандомная цитата +10\n' +
    '3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10\n' +
    '4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10\n' +
    '5. Смена цитаты сопровождается любым другим эффектом: изменяется изображение, проигрывается звук +10\n' +
    '6. Можно выбрать один из двух языков отображения цитат: en/ru +10\n' +
    '7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n' +
    '        свой дизайн + сохранение настроем языка\n\n' +
    'ИТОГО: 70 баллов')