export function newsCardHome(news) {
  return /* html */ `
    <div class="home__news-card">
        <img src="${news.img}" alt="${news.title}" class="home__news-card-img">
        <div class="home__news-card-inner">
            <h3 class="home__news-card-inner-title">${news.title}</h3>
            <p class="home__news-card-inner-text">${news.text}</p>
        </div>
    </div>
    `
}
