function essa(){
    const a = parseFloat(document.getElementById('a').value);
const wynik = document.getElementById('wynik');
let sekundy = a%60;
let minuty = Math.floor(a%3600/60)
let godziny = Math.floor(a/3600);
wynik.innerHTML = "Wynik: " +godziny+"g " +minuty+"m " +sekundy+"s";


}