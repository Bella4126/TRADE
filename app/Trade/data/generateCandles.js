// Generate random candle data for the chart

// Helper function to generate a random number within a range
const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Helper function to generate a random candle
const generateCandle = (prevClose, time, volatility = 0.0005) => {
  const changePercent = randomInRange(-volatility, volatility);
  const open = prevClose;
  const close = prevClose * (1 + changePercent);
  
  // Make sure high and low are properly set
  const high = Math.max(open, close) + randomInRange(0, volatility * prevClose);
  const low = Math.min(open, close) - randomInRange(0, volatility * prevClose);
  
  return {
    time,
    open,
    high,
    low,
    close
  };
};

// Generate a series of candles based on the timeframe
export const generateCandles = (timeframe = '1m', count = 100) => {
  // Base starting price
  let basePrice = 0.20300;
  
  // Set volatility based on timeframe
  let volatility = 0.0005; // Default
  
  if (timeframe.endsWith('s')) {
    volatility = 0.0002;
  } else if (timeframe.endsWith('h')) {
    volatility = 0.001;
  } else if (timeframe.endsWith('d')) {
    volatility = 0.002;
  }
  
  // Generate timestamps based on timeframe
  const now = new Date();
  const timeframeInMs = getTimeframeInMs(timeframe);
  
  const candles = [];
  for (let i = count - 1; i >= 0; i--) {
    const candleTime = new Date(now.getTime() - i * timeframeInMs);
    const timeString = formatTimeForCandle(candleTime, timeframe);
    
    if (i === count - 1) {
      // First candle
      candles.push({
        time: timeString,
        open: basePrice,
        high: basePrice * (1 + volatility),
        low: basePrice * (1 - volatility),
        close: basePrice * (1 + randomInRange(-volatility, volatility))
      });
    } else {
      // Subsequent candles based on previous close
      const prevClose = candles[candles.length - 1].close;
      candles.push(generateCandle(prevClose, timeString, volatility));
    }
  }
  
  return candles;
};

// Get timeframe duration in milliseconds
const getTimeframeInMs = (timeframe) => {
  const value = parseInt(timeframe);
  const unit = timeframe.charAt(timeframe.length - 1);
  
  switch (unit) {
    case 's': return value * 1000;
    case 'm': return value * 60 * 1000;
    case 'h': return value * 60 * 60 * 1000;
    case 'd': return value * 24 * 60 * 60 * 1000;
    default: return 60 * 1000; // Default to 1m
  }
};

// Format time string based on timeframe
const formatTimeForCandle = (date, timeframe) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  
  if (timeframe.endsWith('s') || timeframe === '1m') {
    return `${hours}:${minutes}:${seconds}`;
  } else if (timeframe.endsWith('m') || timeframe === '1h') {
    return `${hours}:${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
};