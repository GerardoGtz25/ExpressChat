FROM node:8

COPY [".", "."]

WORKDIR /usr/src

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]