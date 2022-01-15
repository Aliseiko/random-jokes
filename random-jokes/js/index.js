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
