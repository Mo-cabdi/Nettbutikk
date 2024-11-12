
//Dark/Light Mode

const mode = document.getElementById('mode');
const body = document.querySelector('body');

const modeFunc = () => {
  mode.addEventListener('click', () =>{
 
    if (mode.classList.contains('bx-sun')){
      mode.classList.toggle('bx-moon');
      body.classList.toggle('dark')
    }
  })
}

modeFunc();




//SIDE MENU

const menu = document.getElementById('menu');
const sideMenu = document.querySelector('.nav__mobile');

const menuSide = () => {
  menu.addEventListener('click', () =>{

    if (menu.classList.contains('bx-menu')){
      menu.classList.toggle('bx-x');
      sideMenu.classList.toggle('active');
    }
  })
}

menuSide();



