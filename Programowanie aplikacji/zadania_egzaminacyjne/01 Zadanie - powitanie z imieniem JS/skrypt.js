document.addEventListener('click', function() {
    const imie = document.querySelector('#imie');
    const wynik = document.querySelector('#wynik');
    wynik.innerHTML = imie.value
}, false);
