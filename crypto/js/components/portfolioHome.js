import { assetCardPortfolio } from './assetCardPorfolio.js'

export function portfolioHome(userAssets) {
  const cardHTML = userAssets
    .map((asset, index) => assetCardPortfolio(asset, index))
    .join('')

  return /* html */ `
            <div class="home__portfolio">
                <h2 class="home__portfolio-title">
                    My Portfolio    
                </h2>
                <div class="home__portfolio__cards">
                    ${cardHTML}
                </div>
            </div>
        `
}
