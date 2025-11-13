const axios = require('axios');
const targets = require('../endpoints.json');
(async () => {
  const results = [];
  for (const t of targets) {
    try {
      const res = await axios.get(t.url, { timeout: 5000 });
      results.push({ url: t.url, status: res.status, healthy: res.status === 200 });
    } catch (err) {
      results.push({ url: t.url, status: err.response ? err.response.status : 'NO_RESPONSE', healthy: false });
    }
  }
  console.log(JSON.stringify(results, null, 2));
  const anyUnhealthy = results.some(r => !r.healthy);
  if (anyUnhealthy) process.exitCode = 2;
})();
