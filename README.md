## Installing
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
## Services
+ Spring
+ PostgreSQL
+ React

## Backend
```shell
localhost:8080
```
## Database
```shell
localhost:5432
```
## Frontend
```shell
localhost:3000
```
## Usage
действия от лица гостя:
Войти 
```shell
http://localhost:3000/login
```
Зарегистрироваться 
```shell
http://localhost:3000/registration
```
действия от лица зарегистророванного пользователя:
Посмотреть интерьер и цены 
```shell
http://localhost:3000/hall
```
Аренда света 
```shell
http://localhost:3000/light
```
Посмотреть фотофоны 
```shell
http://localhost:3000/background
```
Забронировать студию 
```shell
http://localhost:3000/booking
```
действия от лица администратора:
Панель администратора залы 
```shell
http://localhost:3000/ap
```
Панель администратора фоны 
```shell
http://localhost:3000/ap/back
```
Панель администратора свет 
```shell
http://localhost:3000/ap/light
```
Посмотреть все брони 
```shell
http://localhost:3000/ap/booking
```
