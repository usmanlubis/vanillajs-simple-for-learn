const activateNavbarSideButton = document.getElementById('navbar-side-button');
const inactivateNavbarSideButton = document.getElementById('dashboard-button');
const navbar = document.querySelector('.navbar')

let isNavbarSideActive = false;

function setNavbarSide(sideNavbar){
  if (sideNavbar){
    navbar.style.left = '0';
    return;
  }
  navbar.style.left = '-9999px';
  activateNavbarSideButton.style.display = 'block';
  return;
}

activateNavbarSideButton.addEventListener('click', function(){
  if (!isNavbarSideActive){
    isNavbarSideActive = true;
    activateNavbarSideButton.style.display = 'none';
    setNavbarSide(true);
    return;
  }
})

inactivateNavbarSideButton.addEventListener('click', function(){
  if (isNavbarSideActive){
    isNavbarSideActive = false;
    setNavbarSide(false);
    return;
  }
})