function essa(){
    const a = parseFloat(document.getElementById('a').value);
const b = parseFloat(document.getElementById('b').value);
const c = parseFloat(document.getElementById('c').value);
const wynik = document.getElementById('wynik');
const p = (a+b+c)/2;

    if (a+b<=c || a+c<=b || b+c<=a){
    wynik.innerHTML = `Nie można zbudować trójkąta o bokach:<br>a = `+a+`,<br>b = `+b+`,<br>c = `+c;
    } else {
        let pole=Math.sqrt(p*(p-a)*(p-b)*(p-c));
        wynik.innerHTML = `Pole trójkąta o bokach:<br>a = `+a+`,<br>b = `+b+`,<br>c = `+c+ `<br>wynosi: `+pole;
}
}