# Sử dụng image Node.js làm nền
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json để cài dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ code vào container
COPY . .

# Khai báo cổng mà app sẽ lắng nghe
EXPOSE 3000

# Lệnh để chạy app khi container được khởi động
CMD ["node", "index.js"]