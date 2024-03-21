
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



// const filtersDropdown1 = document.getElementById('filters__dropdown1');
// console.log(filtersDropdown1);

// const filtersDropdown2 = document.getElementById('filters__dropdown2');
// console.log(filtersDropdown2);

// const filtersDropdownMenu = document.querySelector('.filters__dropdown');
// console.log(filtersDropdownMenu);

// filtersDropdown1.addEventListener('click', ()=>{
//   console.log('Yo')
//   filtersDropDown(filtersDropdown1);
// })
// filtersDropdown2.addEventListener('click', ()=>{
//   console.log('Wts Up')
//   filtersDropDown(filtersDropdown2);

// })



// function filtersDropDown(par) {
//   if(filtersDropdownMenu.classList.contains('filters__dropdown')) {

//     par.classList.toggle('FilterDropDown');
//   }
// }


// document.addEventListener("DOMContentLoaded", function() {
//   // Get all dropdown toggles
//   var dropdownToggles = document.querySelectorAll('.filters__dropdown');

//   // Add event listener to each dropdown toggle
//   dropdownToggles.forEach(function(dropdownToggle) {
//     dropdownToggle.addEventListener('click', function(event) {
//       event.stopPropagation(); // Prevent click event from bubbling up
      
//       // Toggle the visibility of the dropdown menu
//       var dropdownMenu = this.querySelector('.filters__dropdown');
//       dropdownMenu.classList.toggle('show');
//     });
//   });

//   // Close dropdown menus when clicking outside
//   document.addEventListener('click', function(event) {
//     var dropdownMenus = document.querySelectorAll('.filters__dropdown');
//     dropdownMenus.forEach(function(dropdownMenu) {
//       if (!dropdownMenu.contains(event.target)) {
//         dropdownMenu.classList.remove('show');
//       }
//     });
//   });
// });
