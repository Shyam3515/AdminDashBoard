const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

const light = document.querySelector('.light');
const dark = document.querySelector('.dark');

menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
});

// Theme
dark.addEventListener('click', ()=>{
    document.body.classList.add('theme');
    dark.classList.add('active');
    light.classList.remove('active');
});

light.addEventListener('click', ()=>{
    document.body.classList.remove('theme');
    dark.classList.remove('active');
    light.classList.add('active');
});