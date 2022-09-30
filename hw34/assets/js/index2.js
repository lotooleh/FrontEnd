let modal = document.getElementById('mymodal');
let btn = document.getElementById('button');
let span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
    modal.style.display = "block";
    btn.style.display = "none";
}
span.onclick = function () {
    modal.style.display = "none";
    btn.style.display = "block";
}