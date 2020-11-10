FROM node:14.15.0 as builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY . .

RUN npm run test-ci

ENV NODE_ENV production
RUN npm run build

FROM node:14.15.0-alpine

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/ /usr/src/app

EXPOSE 3000
CMD npm run start