// script.js

async function fetchServerStats() {
    try {
      const response = await fetch('https://api.gamecms.org/game/fivem/nlx-01.luxehost.nl:20057');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const currentPlayers = data.players.online;
      const maxPlayers = data.players.max;
      document.getElementById('server-stats').textContent = `${currentPlayers}/${maxPlayers} Players Online`;
    } catch (error) {
      console.error('Error fetching server stats:', error);
      document.getElementById('server-stats').textContent = 'Unable to load server stats.';
    }
  }
  
  // Fetch server stats on page load
  fetchServerStats();
  
  // Optionally, refresh stats every 60 seconds
  setInterval(fetchServerStats, 60000);
  