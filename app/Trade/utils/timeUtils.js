// Format epoch seconds to time string
export function formatTime(epochSec) {
  const d = new Date(epochSec * 1000);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Get current time as string
export function getCurrentTime() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

// Format time duration from seconds
export function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Get current epoch time in seconds
export function getCurrentEpochSeconds() {
  return Math.floor(Date.now() / 1000);
}