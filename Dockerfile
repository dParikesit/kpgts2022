FROM node:lts

WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

COPY . .
CMD ["yarn", "start"]