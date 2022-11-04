function essa(){
    const a = parseFloat(document.getElementById('a').value);
const wynik = document.getElementById('wynik');

wynik.innerHTML = "Wyniki obliczeń dla T<sub><i>Celsjusz</i></sub> = " +a+"<br>T<sub><i>Kelwin</i></sub> = " +(a+273.15)+"<br> T<sub><i>Fahrenheit</i></sub> = " +((a*9/5)+32);
 

}