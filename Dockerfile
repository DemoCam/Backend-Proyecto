# Dockerfile ultra-simple con MongoDB
FROM node:18-slim

# Instalar MongoDB y dependencias mínimas
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    procps \
    && wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg \
    && echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list \
    && apt-get update \
    && apt-get install -y mongodb-org \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /data/db

WORKDIR /app

# Instalar backend
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

# Script de inicio simple
RUN echo '#!/bin/bash\n\
mongod --dbpath /data/db --bind_ip_all &\n\
sleep 5\n\
exec npm run start:prod' > /start.sh && chmod +x /start.sh

EXPOSE 3000
ENV MONGODB_URI=mongodb://localhost:27017/docentes_db

CMD ["/start.sh"]