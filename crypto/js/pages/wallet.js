import { walletAssetList } from '../components/walletAssetList.js'

export function walletPage(userAssets) {
  console.log('array for wallet', userAssets)

  const netWorth = userAssets.reduce((acc, asset) => acc + asset.amountUsd, 0)
  console.log('networth: ', netWorth)

  const totalPnlUsd = userAssets.reduce(
    (acc, asset) => acc + asset.amountUsd * (asset.pnl24h / 100),
    0
  )

  console.log('totalPnl ', totalPnlUsd)

  const totalPnlPercent = ((totalPnlUsd / netWorth) * 100).toFixed(2)
  console.log('totalPnl% ', totalPnlPercent)

  const totalSparkline = userAssets[0].last24h.map((_, i) =>
    userAssets.reduce((acc, asset) => acc + asset.last24h[i], 0)
  )

  console.log('Total Sparkline:', totalSparkline)

  const triangleDirection =
    totalPnlPercent >= 0 ? '' : 'transform: rotate(180deg);'
  const color = totalPnlPercent >= 0 ? 'profit' : 'loss'
  return /* html */ `
    <div class="wallet">
        <h2 class="wallet__title">Wallet</h2>
        <div class="wallet__portfolio">
            <p class="wallet__portfolio-header">Portfolio Value</p>
            <h3 class="wallet__portfolio-balance"><span>$</span><span>${netWorth}</span></h3>
            <div class="wallet__portfolio-pnl ${color}">
                <svg 
                    style="${triangleDirection}"
                    width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="currentColor"/>
                </svg>
                ${totalPnlPercent}%
            </div>
            <div class="wallet__portfolio-chart">
                <canvas id="wallet__portfolio-chart-allTime"></canvas>
            </div>
            <ul class="wallet__portfolio-chart-time">
                <li class="wallet__portfolio-chart-time-period">1h</li>
                <li class="wallet__portfolio-chart-time-period choosen">1d</li>
                <li class="wallet__portfolio-chart-time-period">1w</li>
                <li class="wallet__portfolio-chart-time-period ">1m</li>
                <li class="wallet__portfolio-chart-time-period">1y</li>
                <li class="wallet__portfolio-chart-time-period">all</li>
            </ul>
        </div>
        <div class="wallet__nav">
            <ul class="wallet__nav-items">
                <li class="wallet__nav-item choosen">Favorites</li>
                <li class="wallet__nav-item">Crypto</li>
                <li class="wallet__nav-item">Fiat</li>
            </ul>
        </div>
        ${walletAssetList(userAssets)}
    </div>
    `
}
