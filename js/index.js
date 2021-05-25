var modalImg = document.querySelector('.modal-overlay-img');
var modal = document.querySelector('.modal')
var modalOverlay = document.querySelector('.modal-overlay');
var app = document.querySelector('.app');
var navTitletexts = document.querySelectorAll('.nav-title-text')
setTimeout(()=>{
    modalImg.style.display = 'block';
},1000)
setTimeout(()=>{
    modal.style.display = 'none';
    modalImg.style.display = 'none';
    navTitletexts.forEach((navTitletext)=>{
        navTitletext.style.animation = 'fadeout linear 0.5s';
    })
},3000)