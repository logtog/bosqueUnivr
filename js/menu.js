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
function informations() { window.location.href = "https://www.google.com.br/maps/place/R.+Osc%C3%A1r+Yoshiaki+Margario,+185+-+Jardim+das+Palmeiras,+Registro+-+SP,+11900-000/@-24.5229685,-47.8454201,17z/data=!3m1!4b1!4m5!3m4!1s0x94c5335f799f3df1:0xfa5bcf90a89b9c67!8m2!3d-24.5229685!4d-47.8432314"; }
function univr() { window.location.href = "https://portal.unisepe.com.br/univr/"; }