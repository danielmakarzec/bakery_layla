//  variables
const hamburger = document.getElementById('dropbtn');
const dropMenu = document.getElementById('dropMenu');
const dropMenuOptions = document.querySelectorAll('.btn-option');

// listeners
hamburger.addEventListener('click', e => {
    e.preventDefault();
    dropMenu.classList.toggle('block');
})

dropMenuOptions.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.attributes.href.value.slice(1);
        let section = document.getElementById(target)
        section.scrollIntoView();
        dropMenu.classList.toggle('block');
    })
})