import { HomePage } from './pages/home.js'
import { marketPage } from './pages/market.js'
import { walletPage } from './pages/wallet.js'
import { userAssets } from './data/mockdata.js'
import { marketCoins } from './data/marketMock.js'
import {
  renderUserCharts,
  renderMarketCharts,
  renderWalletAssetsCharts,
  renderPortfolioChart,
} from './components/renderCharts.js'

export const routes = {
  '/': () => HomePage('Ahmed', 4562.52, userAssets),
  '/market': () => marketPage(marketCoins),
  '/wallet': () => walletPage(userAssets),
}

export function navigateTo(path) {
  history.pushState({}, '', path)
  renderReroute(path)
}

export function renderReroute(path) {
  const container = document.getElementById('page')
  const pageFunc = routes[path] || (() => '<h1>404 Page not found</h1>')
  container.innerHTML = pageFunc()

  const btns = document.querySelectorAll('.bottom-nav-btn')
  btns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.path === path)
  })

  if (path === '/' && Array.isArray(userAssets)) {
    renderUserCharts(userAssets)
  } else if (path === '/market' && Array.isArray(marketCoins)) {
    renderMarketCharts(marketCoins)
  } else if (path === '/wallet' && Array.isArray(userAssets)) {
    renderPortfolioChart(userAssets, 'wallet__portfolio-chart-allTime')
    renderWalletAssetsCharts(userAssets)
  }
}

window.addEventListener('popstate', () => {
  renderReroute(window.location.pathname)
})
