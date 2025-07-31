// Sample asset data for the trading interface
export const sampleAssets = [
  {
    symbol: 'USD/BRL (OTC)',
    icon1: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
    icon2: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg',
    change: 9.86,
    profit1min: 93,
    profit5min: 93,
    isNew: true
  },
  {
    symbol: 'USD/MXN (OTC)',
    icon1: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
    icon2: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg',
    change: 0,
    profit1min: 93,
    profit5min: 90
  },
  {
    symbol: 'USD/PKR (OTC)',
    icon1: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
    icon2: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
    change: -0.11,
    profit1min: 93,
    profit5min: 93
  },
  {
    symbol: 'NZD/CAD (OTC)',
    icon1: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg',
    icon2: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg',
    change: -1.79,
    profit1min: 91,
    profit5min: 92
  },
  {
    symbol: 'AUD/CHF (OTC)',
    icon1: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg',
    icon2: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg',
    change: 1.52,
    profit1min: 90,
    profit5min: 90
  },
  {
    symbol: 'CAD/CHF (OTC)',
    icon1: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg',
    icon2: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg',
    change: 0.65,
    profit1min: 90,
    profit5min: 90
  },
  {
    symbol: 'EUR/USD (OTC)',
    icon1: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg',
    icon2: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
    change: -0.34,
    profit1min: 89,
    profit5min: 89
  }
];

// Sample trading history data
export const sampleTradeHistory = [
  {
    id: 1,
    pair: 'CAD/JPY',
    direction: 'up',
    investment: '70 ₹',
    payout: '+70.0 ₹',
    time: '12:34:56',
    duration: '00:01:00',
    status: 'win'
  },
  {
    id: 2,
    pair: 'USD/BRL',
    direction: 'down',
    investment: '70 ₹',
    payout: '-70.0 ₹',
    time: '12:32:21',
    duration: '00:01:00',
    status: 'loss'
  }
];