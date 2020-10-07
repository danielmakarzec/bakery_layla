//  variables
const btn = document.getElementById('dropbtn');
const dropMenu = document.getElementById('dropMenu');
const dropMenuOptions = document.querySelectorAll('.btn-option');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const career = document.getElementById('career');

// listeners
btn.addEventListener('click', e => {
    e.preventDefault();
    dropMenu.classList.toggle('block');
})

dropMenuOptions.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        dropMenu.classList.toggle('block');
        let target = e.target.attributes.href.value;
        let section = document.getElementById(target.slice(1))
        // console.log(target.slice(1));
        section.scrollIntoView();
    })
})