FROM node:alpine AS build

WORKDIR /build
ADD . .

RUN yarn install
RUN yarn compile

FROM node:alpine

RUN apk add --no-cache curl

WORKDIR /app
COPY --from=build /build/dist .

RUN yarn install --production
RUN yarn global add pm2

EXPOSE 3000

CMD ["pm2-runtime", "server.js"]
