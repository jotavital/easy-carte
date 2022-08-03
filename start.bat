cd easy-carte-api
composer update
php artisan cache:clear
php artisan route:clear
php artisan config:clear
php artisan view:clear
php artisan migrate --force
php artisan serve --host=0.0.0.0


cd ../easy-carte-front
yarn
yarn start