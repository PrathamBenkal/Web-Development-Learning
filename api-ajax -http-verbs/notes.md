# APIs, AJAX, HTTP Verbs, API Testing Tools, Status Codes

## API (Application Programming Interface)
- A way for two applications/systems to communicate with each other
- Usually exposed as endpoints (URLs) that return data (often JSON)

## AJAX (Asynchronous JavaScript and XML)
- Technique to send/receive data from a server without reloading the page
- Traditionally used XMLHttpRequest, now mostly replaced by `fetch()` or `axios`

## HTTP Verbs (Methods)
- **GET** — retrieve data
- **POST** — create new data
- **PUT** — update/replace existing data (entire resource)
- **PATCH** — partially update existing data
- **DELETE** — remove data

## API Testing Tools
- **Postman** — most popular tool to test APIs (send requests, view responses, set headers/auth)
- **Thunder Client** — lightweight Postman alternative built into VS Code
- **cURL** — command-line tool to send HTTP requests

## HTTP Status Codes
- **200** — OK (success)
- **201** — Created (successful POST)
- **400** — Bad Request (client error, invalid input)
- **401** — Unauthorized (missing/invalid auth)
- **404** — Not Found
- **500** — Internal Server Error (server-side issue)