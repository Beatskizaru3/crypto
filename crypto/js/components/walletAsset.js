export function walletAsset(asset, index) {
  const isProfit = asset.pnl24h >= 0 ? true : false
  const color = isProfit ? 'profit' : 'loss'
  const triangleDirection = isProfit ? '' : 'transform: rotate(180deg);'
  return /* html */ `
    <div class="wallet__coins-asset">
                <div class="wallet__coins-info">
                    <img src=${asset.icon} alt=${asset.name} class="wallet__coins-asset-svg">
                    <div class="wallet__coins-asset-inner">
                        <h4 class="wallet__coins-asset-inner-title">${asset.name}</h4>
                        <span class="wallet__coins-asset-inner-pair">
                            ${asset.symbol}
                            <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1" cy="1" r="1" fill="#838C9E"/>
                            </svg>
                            USD
                        </span>
                    </div>
                </div>
                <div class="wallet__coins-asset-chart">
                    <canvas id="wallet-chart-${index}"></canvas>
                </div>
                <div class="wallet__coins-asset-currency">
                    <span class="wallet__coins-asset-currency-current">$${asset.amountUsd}</span>
                    <span class="wallet__coins-asset-currency-pnl ${color}">
                    <span class="wallet__coins-asset-currency-pnl-sign">
                        <svg 
                            style="${triangleDirection}"
                            width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="currentColor"/>
                        </svg>
                    </span>
                    <span class="wallet__coins-asset-currency-pnl-text">
                        ${asset.pnl24h}%
                    </span>
                    </span>
                    
                </div>
            </div>
    `
}
