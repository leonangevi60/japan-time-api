# japan-time-api

API đơn giản để lấy giờ Nhật Bản qua endpoint.

## Sử dụng

1. Cài đặt dependencies:
   ```
   npm install
   ```

2. Chạy server:
   ```
   npm start
   ```

3. Gọi API:
   ```
   GET http://localhost:3000/japan-time
   ```

**Phản hồi mẫu:**
```json
{
  "japanTime": "2025-08-02T21:20:20.000Z",
  "pretty": "2025/8/3 6:20:20"
}
```