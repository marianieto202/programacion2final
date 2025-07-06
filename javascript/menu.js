
  function toggleMenu() {
    const menu = document.getElementById('menu');
    const body = document.body;

    menu.classList.toggle('show');
   
    if (menu.classList.contains('show')) {
    body.classList.add('menu-open');
    } else {
    body.classList.remove('menu-open');
  }
}