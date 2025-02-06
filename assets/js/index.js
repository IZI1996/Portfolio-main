const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
let selectHeader = document.getElementById('header')
  if (selectHeader) {
    console.log(selectHeader)

    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }


const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
// read more 
// Get all buttons with class 'myBtn'
// Get all buttons with class 'myBtn'
const buttons = document.querySelectorAll('.myBtn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    const dots = document.querySelector(`.dots[data-target="${target}"]`);
    const moreText = document.querySelector(`.more-content[data-target="${target}"]`);
    const btnText = this.textContent;

    if (btnText === "Read more") {
      dots.style.display = "none";
      moreText.style.display = "inline";
      this.textContent = "Read less";
    } else {
      dots.style.display = "inline";
      moreText.style.display = "none";
      this.textContent = "Read more";
    }
  });
});





