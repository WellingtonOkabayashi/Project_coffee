const nav = document.querySelector('.navigation')

const btn = document.querySelector('.menu')

btn.onclick = function () {
  nav.classList.toggle('active')
}
