const paliwo = document.querySelector('#paliwo');
const ile = document.querySelector('#ile');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let koszt_paliwa = 0;
    let paliwo_wartosc = Number(paliwo.value);
    let ile_wartosc = Number(ile.value);
    if(paliwo_wartosc===1)
        koszt_paliwa = ile_wartosc * 4;
    if(paliwo_wartosc===2)
        koszt_paliwa = ile_wartosc * 3.5
    wynik.innerHTML = `koszt paliwa: ${koszt_paliwa} zł`;


})