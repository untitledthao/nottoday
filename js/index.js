var modalImg = document.querySelector('.modal-overlay-img');
var modal = document.querySelector('.modal')
var modalOverlay = document.querySelector('.modal-overlay');
var app = document.querySelector('.app');
setTimeout(()=>{
    modalImg.style.display = 'block';
},1000)
setTimeout(()=>{
    app.style.animation = 'fadeout ease-out 1.4s';
    modal.style.display = 'none';
    modalImg.style.display = 'none';
},5000)