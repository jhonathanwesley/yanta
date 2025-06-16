# Project Documentation

## **STACK**

- `MERN`

    - **Mongo DB;**     | [Mongo](https://www.mongodb.com/products/platform/cloud)
    - **Express;**      | [Express](https://expressjs.com/)
    - **React JS;**     | [React JS](https://react.dev/)
    - **Node JS**       | [Node JS](https://nodejs.org/)

> Rate Limiting:

- `Redis` on [Upstash](https://upstash.com/)

> Frontend tool:

- [Vite](https://vite.dev/)

## Environment

> Backend
```bash
$ cd server/
$ npm install express@4.18.2
$ npm install nodemon -D
$ npm i mongoose@8.14.3
$ npm i dotenv@16.5.0
$ npm i @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9
```

> Frontend
```bash
$ npm create vite@latest .
$ - React
$ - JavaScript
$ npm install
$ npm run dev
$ npm i react-router
$ npm i react-hot-toast
```

---

## Filtrando | Removendo dados sensíveis de commit anterior

> **Ferramenta** `git-filter-repo`:
```bash
$ sudo apt install git-filter-repo
```

> Substituindo a string por **REMOVED**:
```bash
$ git filter-repo --replace-text <(echo 'password=123456==>REMOVED')
```

> Forçando para repositório remoto:
```bash
$ git remote add main https://github.com/username/repo
$ git push main --force --all
$ git push main --force --tags
```
