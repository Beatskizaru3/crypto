export function assetCardPortfolio(asset, index) {
  const isProfit = asset.pnl24h >= 0
  const color = isProfit ? 'profit' : 'loss'
  const triangleDirection = isProfit ? '' : 'transform: rotate(180deg);'

  return /* html */ `
    <div class="home__portfolio-card">
        <div class="home__portfolio-card-header">
            <img src="${asset.icon}" alt="" class="home__portfolio-card-header-svg">
            <div class="home__portfolio-card-header-inner">
                <h4 class="home__portfolio-card-header-inner-title">
                    ${asset.name}
                </h4>
                <h3 class="home__portfolio-card-header-inner-currency">
                    ${asset.symbol}/usd
                </h3>
            </div>
        </div>
        <div class="home__portfolio-card-chart">
            <canvas id="sparkline-${index}"></canvas>
        </div>
        <div class="home__portfolio-card-bottom">
            <span class="home__portfolio-card-bottom-amount">$${asset.amountUsd}</span>
            <span class="home__portfolio-card-bottom-pnl ${color}">
                <span>
                    <svg 
                        style="${triangleDirection}"
                        width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="currentColor"/>
                    </svg>
                </span>
                <span>
                    ${asset.pnl24h}%
                </span>
            </span>
        </div>
    </div>
    `
}
