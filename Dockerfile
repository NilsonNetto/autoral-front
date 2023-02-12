FROM node:16

WORKDIR /app

COPY . .
RUN npm i

ENV VITE_API_BASE_URL='http://localhost/api'

RUN npm run build

RUN mkdir -p /var/www/html
RUN mv dist/* /var/www/html

WORKDIR /

RUN rm -rf /app