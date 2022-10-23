FROM node:lts-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./*.js .
EXPOSE 1122
CMD [ "node", "server.js" ]