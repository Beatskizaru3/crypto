export const userAssets = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: '../../public/svgs/btc.svg', // путь к иконке
    amountUsd: 15230, // текущая стоимость в $
    pnl24h: 2.3, // +2.3%
    sparkline: [100, 120, 115, 130, 140, 138], // мини-график
    last24h: [
      15100, 15150, 15200, 15230, 15210, 15220, 15240, 15250, 15230, 15235,
    ], // 10 точек
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    icon: '../../public/svgs/eth.svg',
    amountUsd: 3840,
    pnl24h: -1.1,
    sparkline: [50, 52, 49, 51, 50, 48],
    last24h: [3820, 3825, 3830, 3840, 3845, 3840, 3835, 3840, 3845, 3840],
  },
]
