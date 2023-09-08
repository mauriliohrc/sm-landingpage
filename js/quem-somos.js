const rodapeContainer = document.getElementById('rodape');
fetch('rodape.html').then(response => response.text())
  .then(data => {
    rodapeContainer.innerHTML = data;
  });

function menuShow() {
  let menuMobile = document.querySelector('#menuMobile');

  if (menuMobile.classList.contains('openMenu')) {
    menuMobile.classList.remove('openMenu');
  } else {
    menuMobile.classList.add('openMenu');
  }
}