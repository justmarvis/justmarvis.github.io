// mainMenu
const mainMenu = document.querySelector('.mainMenu');
let menuOpen = false;
mainMenu.addEventListener('click', () => {
  if(!menuOpen) {
    mainMenu.classList.add('open');
    menuOpen = true;
  }
  else {
    mainMenu.classList.remove('open');
    menuOpen = false;
  }
});
function myFunction() {
  document.getElementById('dropDn').classList.toggle('mainNavShow');
}
window.onclick = function(event) {
  if (!event.target.matches('.menuBar')) {
    var dropdowns = document.getElementById('mainNav');
    var i;
    for (i = 0; i < dropdowns.clientHeight; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('mainNavShow')) {
        openDropdown.classList.remove('mainNavShow');
      }
    }
  }
}


// footer
  let week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
let date = new Date();
let weekname = week_names[date.getDay()];
let monthname = month_names[date.getMonth()];

const dateoutput = document.querySelector('#currentdate');

dateoutput.textContent = "Last Updated: " + weekname + ", " + date.getDate() + " " + monthname + " " + date.getFullYear();