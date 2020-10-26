let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event){
  event.preventDefault();
  menu.classList.toggle('visible');  //Меняет классы, если у нас был class="sidebar", после клика станет class="sidebar visible"
})