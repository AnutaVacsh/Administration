##Installing
Для начала работы клонируйте себе проект
```shell
git clone https://github.com/AnutaVacsh/Administration
```
Перейдите в нужную директорию
```shell
cd Administration
```
Для развёртывания у себя приложения воспользуйтесь командой:
```shell
docker compose up
```
##Services
+Spring
+PostgreSQL
+React

##Backend
localhost:8080
##Database
localhost:5432
##Frontend
localhost:3000

##Usage
действия от лица гостя:
Войти http://localhost:3000/login
Зарегистрироваться http://localhost:3000/registration

действия от лица зарегистророванного пользователя:
Посмотреть интерьер и цены http://localhost:3000/hall
Аренда света http://localhost:3000/light
Посмотреть фотофоны http://localhost:3000/background
Забронировать студию http://localhost:3000/booking

действия от лица администратора:
Панель администратора залы http://localhost:3000/ap
Панель администратора фоны http://localhost:3000/ap/back
Панель администратора свет http://localhost:3000/ap/light
Посмотреть все брони http://localhost:3000/ap/booking
