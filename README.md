# pipeline

Простейшее Node.js приложение (Express) для демонстрации CI/CD.

- Сервис отвечает на GET / строкой "Hello World!" (порт 8080)
- Docker Hub: `grigorievda21/pipeline` (теги: `v<версия>`, `latest`)

Локальный запуск:
- npm ci
- npm start

Docker:
- docker build -t grigorievda21/pipeline:local .
- docker run --rm -p 8080:8080 grigorievda21/pipeline:local

Прод через docker compose (self-hosted):
- APP_VERSION=1.0.0 docker compose pull
- APP_VERSION=1.0.0 docker compose up -d
