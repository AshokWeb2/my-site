burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')
navItems = document.querySelector('.nav-items')




burger.addEventListener('click', ()=>{
    navItems.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    logo.classList.toggle('v-class')

})