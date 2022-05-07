FROM php:fpm-alpine3.14

RUN mkdir easy-carte-api

WORKDIR /easy-carte-api

RUN apk update
RUN apk add curl
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN mkdir .docker

COPY /.docker/entrypoint.sh ./.docker
ENTRYPOINT ["sh", "./.docker/entrypoint.sh"]

EXPOSE 8000