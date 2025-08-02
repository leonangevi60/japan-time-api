const express = require('express');
const app = express();

app.get('/japan-time', (req, res) => {
  // Lấy giờ Nhật Bản (UTC+9)
  const japanTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  res.json({
    japanTime: japanTime.toISOString(),
    pretty: japanTime.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Japan Time API đang chạy tại http://localhost:${PORT}`);
});