FROM node:16.4-alpine

WORKDIR /app-frontend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "preview"]