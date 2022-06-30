FROM node:18-alpine

WORKDIR /app/ui

# Copy lock files if file exists
COPY package.json yarn.lock* package-lock.json* ./

RUN yarn install

COPY . .

CMD yarn dev