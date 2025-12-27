FROM node:20-bullseye

RUN apt-get update && apt-get install -y poppler-utils

WORKDIR /app

# Copy only lock + package files first (cacheable)
COPY package.json package-lock.json ./

# Install deps inside Linux (native binaries)
RUN npm ci --no-audit --no-fund

# Copy rest of the app
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
