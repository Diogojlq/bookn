FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY db ./db/

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
