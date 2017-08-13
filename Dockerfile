FROM node:latest

WORKDIR /usr/masonstrap

COPY yarn.lock .
COPY package.json .
RUN yarn
COPY . .
