let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);

  show = !show;
});

function home() { window.location.href = "../index.html"; }
function forest() { window.location.href = "/bosque-registro/qrcode.html"; }
function informations() { window.location.href = "/bosque-registro/maps.html"; }
function univr() { window.location.href = "https://portal.unisepe.com.br/univr/"; }