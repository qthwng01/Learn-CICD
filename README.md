# CI/CD với Docker Hub và Render (Free Plan)

Repo này demo quy trình **CI/CD** sử dụng **GitHub Actions**, **Docker Hub** và **Render** (Free Plan).

## 🚀 Quy trình hoạt động
1. Push code lên branch `main`.
2. GitHub Actions build image và push lên **Docker Hub**.
3. Sau khi push xong, GitHub Actions gọi **Render Deploy Webhook**.
4. Render sẽ pull image `latest` và restart service.

---

## 🛠️ Cấu hình cần chuẩn bị

### 1. Docker Hub
- Tạo repository trên Docker Hub: `your-dockerhub-username/your-app`.
- Tạo **Access Token** trong Docker Hub.

### 2. Render
- Tạo **Web Service** từ Docker Image.
- Lấy **Deploy Webhook URL** trong Render Dashboard

### 3. GitHub Secrets
Vào **Settings > Secrets and variables > Actions** → Add:
- `DOCKERHUB_USERNAME` = username Docker Hub  
- `DOCKERHUB_TOKEN` = access token Docker Hub  
- `RENDER_WEBHOOK_URL` = URL webhook Render  
