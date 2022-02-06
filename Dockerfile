FROM node:slim

WORKDIR /app

COPY package.json .

RUN npm set registry 'http://185.213.175.212:4873/'

RUN npm install

COPY . .

ENV PORT=5000 \
  OBJECT_WRITER='http://object-writer:5001' \
  OBJECT_READER='http://object-reader:5002' \
  OBJECT_IDENTITY='http://object-identity:5004' \
  OBJECT_CONTAINER='http://object-container:5005'

EXPOSE 5000

CMD [ "node", "src/index.js" ]
