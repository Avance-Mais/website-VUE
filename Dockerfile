FROM node:20.11.0

WORKDIR /app/

COPY package*.json ./

COPY /vite.config.js ./

COPY /index.html /app/

COPY src/ ./src/

EXPOSE 5173

RUN npm install

CMD [ "npm" , "run", "dev"]