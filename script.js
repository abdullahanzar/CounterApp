let number = document.querySelector("h1");
const inc = document.querySelector(".leftbt");
const dec = document.getElementsByClassName("rightbt")
const reset = document.querySelector(".reset");
let r = 0;

inc.addEventListener('click', function() {
    number.innerHTML++;
    number.style.color = `rgb(${0}, ${0}, ${0+r})`;
    console.log(r);
    r=r+10;
    if(r>300)
    r=0;
})

dec[0].addEventListener('click', function() {
    if(number.innerHTML==0) {
        console.log("YOU CAN'T GO BELOW ZERO!");
        window.alert("YOU CAN'T GO BELOW ZERO!");
    }
    else {
    number.innerHTML--;
    number.style.color = `rgb(${0}, ${0+r}, ${0-r})`;
    console.log(r);
    r=r+10;
    if(r>300)
    r=0;
}})

reset.addEventListener('click', function() {
    number.innerHTML=0;
    number.style.color = 'rgb(0, 0, 0)'

})
