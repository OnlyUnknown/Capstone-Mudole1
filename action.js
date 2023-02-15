function myFunction() {
    const x = document.querySelector('.nav-bar-courtain');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
  
  function changeIcon() {
    const icon = document.querySelector('#menu-b');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  }
  
  document.querySelector('#menu').addEventListener('click', myFunction());
  document.querySelector('#menu').addEventListener('click', changeIcon());
  document.addEventListener('DOMContentLoaded', changeIcon());