// Gestion du scroll pour l'en-tête
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

let selectHeader = document.getElementById('header')
if (selectHeader) {
  const headerScrolled = () => {
    selectHeader.classList.toggle('header-scrolled', window.scrollY > 100)
  }
  window.addEventListener('load', headerScrolled)
  onscroll(window, headerScrolled) // Écouter le scroll sur window
}

// Menu mobile
const menuToggle = document.getElementById('menu-toggle')
const navbar = document.getElementById('navbar')

menuToggle?.addEventListener('click', () => {
  navbar.classList.toggle('active')
})

// Boutons "Lire plus"
document.querySelectorAll('.myBtn').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target
    const dots = document.querySelector(`.dots[data-target="${target}"]`)
    const moreText = document.querySelector(`.more-content[data-target="${target}"]`)

    if (!dots || !moreText) return

    const isExpanded = dots.style.display === "none"
    dots.style.display = isExpanded ? "inline" : "none"
    moreText.style.display = isExpanded ? "none" : "inline"
    button.textContent = isExpanded ? "Read more" : "Read less"
  })
})