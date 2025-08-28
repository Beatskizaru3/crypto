import { navBarHTML } from './components/bottomNav.js'
import { navigateTo, renderReroute } from './route.js'

const navbarContainer = document.getElementById('bottom-nav')
navbarContainer.innerHTML = navBarHTML()

renderReroute(window.location.pathname)

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.bottom-nav-btn')
  if (btn) {
    const path = btn.dataset.path
    navigateTo(path)
  }
})
