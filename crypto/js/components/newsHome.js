import { newsCardHome } from './newsCardHome.js'
import { newsData } from '../data/newsMock.js'

export function renderNewsFeed(container) {
  const sortedNews = newsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  const newsHTML = sortedNews.map((news) => newsCardHome(news)).join('')

  return /* html */ `
    <div class="home__news">
        <h2 class="home__news-title">
            News
        </h2>
        <div class="home__news-cards">
            ${newsHTML}
        </div>
    </div>
    `
}
