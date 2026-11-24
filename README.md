# GameShelf Frontend

Angular frontend for the GameShelf API.

## Technologies

- Angular 22
- TypeScript
- SCSS
- Angular Router
- Angular HttpClient

## Requirements

- Node.js 24
- npm
- Angular CLI 22
- GameShelf Spring Boot API running on `http://localhost:8080`

## Run locally

```powershell
cd C:\Users\netoi\IdeaProjects\gameshelf-frontend
npm start
```

Open:

```text
http://localhost:4200
```

## Build

```powershell
npm run build
```

## API integration

The frontend is prepared to consume:

```text
GET    http://localhost:8080/api/studios
POST   http://localhost:8080/api/studios
PUT    http://localhost:8080/api/studios/{id}
DELETE http://localhost:8080/api/studios/{id}

GET    http://localhost:8080/api/games
POST   http://localhost:8080/api/games
PUT    http://localhost:8080/api/games/{id}
DELETE http://localhost:8080/api/games/{id}
```

The Spring Boot backend must allow CORS for `http://localhost:4200`.
