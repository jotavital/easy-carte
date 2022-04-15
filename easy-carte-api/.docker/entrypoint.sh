#!/bin/bash

composer install
composer update

php artisan serve --host=0.0.0.0