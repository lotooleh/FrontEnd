
let button = document.querySelector('.svt__swich');
let i = 1;
button.addEventListener('click', function () {
   let items = document.querySelectorAll('.svt__item');
   if (i > 4) {
    i = 1
   }
   for (val of items) {
    document.querySelectorAll('.svt__item')[0].classList.remove('green');
    document.querySelectorAll('.svt__item')[1].classList.remove('yellow');
    document.querySelectorAll('.svt__item')[2].classList.remove('red');
    if (i === 1) {
        document.querySelector('[data-color="1"]').classList.add('green');
    } 
    if (i === 2) {
        document.querySelector('[data-color="2"]').classList.add('yellow');
    } 
    if (i === 3) {
        document.querySelector('[data-color="3"]').classList.add('red');
    }
    if (i === 4) {
        document.querySelector('[data-color="2"]').classList.add('yellow');
    }  
}
i++;
});