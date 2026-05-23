# Match your local Node.js version exactly
FROM node:24.12.0

# Install system dependencies required by Playwright browsers
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    libpango-1.0-0 \
    libcairo2 \
    libxshmfence1 \
    && rm -rf /var/lib/apt/lists/*

# Match your local Playwright version exactly
RUN npm install -g playwright@1.42.0

# Install all browsers
RUN playwright install

# Install browser system dependencies
RUN playwright install-deps

# Set working directory inside container
WORKDIR /app

# No code here ✅