FROM node:12.2.0-alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm i

ENV NODE_ENV production

COPY . .
RUN npm run build

EXPOSE 3000
CMD npm run start