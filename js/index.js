let lang = localStorage.getItem('chacklang') || 'en';

function changeImg() {
    document.querySelector('.chuck-img').src = `assets/img/chuck${Math.ceil(Math.random() * 5)}.jpg`;
}

function playSound() {
    const sound = document.querySelector('.audio');
    sound.currentTime = 0;
    sound.play();
}

async function getMem() {
    const requestURL = (lang === 'en') ? 'https://api.chucknorris.io/jokes/random' : './assets/json/quotes.json';
    const res = await fetch(requestURL);
    const data = await res.json();
    document.querySelector('.quote').textContent = (lang === 'en') ?
        data.value :
        data[Math.floor(data.length * Math.random())].text;
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
