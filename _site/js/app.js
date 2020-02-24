/*a variavel definida em const não pode ser declarada novamente
[href^="#"] pega somente os links que começam com #*/
const menuItems = document.querySelectorAll('.menu-nav a[href^="#"]');
menuItems.foreach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 80, /*pode remover o - 80 se quiser*/
    behavior: "smooth"
  });
}
