export function renderUserCharts(userAssets) {
  userAssets.forEach((asset, index) => {
    const canvas = document.getElementById(`sparkline-${index}`)
    if (!canvas) return

    console.log(asset.sparkline)
    if (!canvas) {
      console.log('Canvas не найден')
    }

    const lineColor = asset.pnl24h >= 0 ? '#7bffb2' : '#ff4646'
    const ctx = canvas.getContext('2d')
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: asset.sparkline.map((_, i) => i),
        datasets: [
          {
            data: asset.sparkline,
            borderColor: lineColor,
            backgroundColor: 'transparent',
            tension: 0.3,
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        layout: {
          padding: {
            top: 4,
            bottom: 4,
          },
        },
      },
    })
  })
}

export function renderMarketCharts(coins) {
  coins.forEach((asset, index) => {
    const canvas = document.getElementById(`market-chart-${index}`)

    console.log(asset.chartData)
    if (!canvas) {
      console.log('Canvas не найден')
    }

    const lineColor = '#18A0FB'
    const ctx = canvas.getContext('2d')
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: asset.chartData.map((_, i) => i),
        datasets: [
          {
            data: asset.chartData,
            borderColor: lineColor,
            backgroundColor: 'transparent',
            tension: 0.3,
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        layout: {
          padding: {
            top: 4,
            bottom: 4,
          },
        },
      },
    })
  })
}

export function renderWalletAssetsCharts(userAssets) {
  userAssets.forEach((asset, index) => {
    const canvas = document.getElementById(`wallet-chart-${index}`)

    console.log(asset.sparkline)
    if (!canvas) {
      console.log('Canvas не найден')
    }

    const lineColor = '#18A0FB'
    const ctx = canvas.getContext('2d')
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: asset.sparkline.map((_, i) => i),
        datasets: [
          {
            data: asset.sparkline,
            borderColor: lineColor,
            backgroundColor: 'transparent',
            tension: 0.3,
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        layout: {
          padding: {
            top: 4,
            bottom: 4,
          },
        },
      },
    })
  })
}

export function renderPortfolioChart(
  userAssets,
  canvasId = 'wallet__portfolio-chart-allTime'
) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) {
    console.log('Canvas не найден')
    return
  }

  // Создаём суммарный массив для спарклайна
  // Берём последние 10 значений для каждого актива (last24h)
  const pointsCount = userAssets[0].last24h.length
  const portfolioData = []

  for (let i = 0; i < pointsCount; i++) {
    let sum = 0
    userAssets.forEach((asset) => {
      sum += asset.last24h[i] || 0
    })
    portfolioData.push(Number(sum.toFixed(2))) // округляем до сотых
  }

  const lineColor = '#18A0FB'
  const ctx = canvas.getContext('2d')

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: portfolioData.map((_, i) => i),
      datasets: [
        {
          data: portfolioData,
          borderColor: lineColor,
          backgroundColor: 'transparent',
          tension: 0.3,
          borderWidth: 2,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } },
      layout: { padding: { top: 4, bottom: 4 } },
    },
  })
}
