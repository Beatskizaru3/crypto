import { profile } from '../components/profile.js'
import { balance } from '../components/balanceHome.js'
import { portfolioHome } from '../components/portfolioHome.js'
import { renderNewsFeed } from '../components/newsHome.js'

export function HomePage(name, total, userAssets) {
  return /*html */ `
  <div class="home">
    ${profile(name)}
    ${balance(total)}
    ${portfolioHome(userAssets)}
    ${renderNewsFeed()}
  </div>
  `
}
