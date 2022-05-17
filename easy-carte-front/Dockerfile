FROM node:slim

RUN mkdir easy-carte-front

WORKDIR /easy-carte-front

RUN mkdir .docker

COPY package.json .

COPY . .

ENTRYPOINT ["sh", "./.docker/entrypoint.sh"]

EXPOSE 3000