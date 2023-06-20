<img src="https://imgur.com/i2x9fN2.gif" align="right" />

# AnimeListify - DRA Project
[![License MIT](https://img.shields.io/badge/License-MIT-pink.svg)](https://opensource.org/licenses/MIT)
[![Angular CI](https://github.com/rk400/animeListify/actions/workflows/main.yml/badge.svg)](https://github.com/rk400/animeListify/actions/workflows/main.yml)
[![Deploy on Github Pages](https://github.com/rk400/animeListify/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/rk400/animeListify/actions/workflows/gh-pages.yml)

[![Figma](https://img.shields.io/badge/--F24E1E?logo=figma&logoColor=ffffff)](https://www.figma.com/)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![Angular](https://img.shields.io/badge/-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![Spring](https://img.shields.io/badge/--6DB33F?style=flat&logo=spring&logoColor=white)](https://spring.io/)
[![Postgresql](https://img.shields.io/badge/--316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/--%230db7ed.svg?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

### Table of Contents
**[Description](#description)**<br>
**[Project deployment](#project-deployment)**<br>
**[Working tools](#working-tools)**<br>
**[Author](#author)**<br>
**[License](#license)**<br>

## Description
AnimeListify is an application for anime tracking, where you can save your animes, and order in list.

## Project deployment

### Running with Docker
```cmd
docker-compose up -d
```

### Running manually
Starting frontend
```cmd
cd ./frontend
ng serve --open
```
Starting backend
```cmd
cd ./backend
mvn spring-boot:run
```
Starting database
```cmd
docker run -d --name postgresql_database -e POSTGRES_USER=user -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=db -p 5432:5432 -v data:/var/lib/pgsql/data postgres
```

## Working tools
These are the different tools that we are going to use in the project:
![Working tools](https://i.imgur.com/ELmrb15.png)

## Author
```mermaid
mindmap
   id)Ruth Maria Rodriguez Simon(    
```
## License

Copyright (c) 2023 AnimeListify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
