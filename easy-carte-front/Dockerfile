FROM node:slim

RUN mkdir easy-carte-front

WORKDIR /easy-carte-front

RUN mkdir .docker

COPY /.docker/entrypoint.sh ./.docker
COPY package.json .
COPY package-lock.json .

RUN npm update --loglevel verbose
RUN ls -a

ENTRYPOINT ["sh", "./.docker/entrypoint.sh"]

EXPOSE 3000