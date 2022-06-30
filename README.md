# docker-laravel-nextjs-mysql
Create services Laravel, NextJs and Mysql with Docker Compose

# Requirement

- Git Bash
- Docker Desktop

# Installation

```
git clone https://github.com/aronei44/docker-laravel-nextjs-mysql.git your-project-name
cd your-project-name
docker-compose up --build -d
```

you dont have a database migrated. now you can running artisan command like below

# Running artisan command

you can running artisan command by :

```
docker container exec php php artisan command
```

example for get route list:

```
docker container exec php php artisan route:list
```

# Contributing

you can contribute by clone this repo, create some changes and create PR

please dont change any dockerfile or docker-compose if you dont know about them

Thanks
