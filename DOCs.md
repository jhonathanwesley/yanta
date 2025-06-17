# Project Documentation

## **STACK**

- `MERN`

    - **Mongo DB;**     | [Mongo](https://www.mongodb.com/products/platform/cloud)
    - **Express;**      | [Express](https://expressjs.com/)
    - **React JS;**     | [React JS](https://react.dev/)
    - **Node JS**       | [Node JS](https://nodejs.org/)

> Rate Limiting:

- `Redis` on [Upstash](https://upstash.com/)

> Frontend tools:

- [Vite](https://vite.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [ibelick](https://bg.ibelick.com/)

---

## Environment

> Backend
```bash
$ cd server/
$ npm install express@4.18.2
$ npm install nodemon -D
$ npm i mongoose@8.14.3
$ npm i dotenv@16.5.0
$ npm i @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9
$ npm i cors@2.8.5
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
$ npm install -D tailwindcss@3 postcss autoprefixer
$ npx tailwindcss init -p
$ npm i daisyui@4.12.24 -D
$ npm i lucide-react
$ npm i axios
```

### DEPENDENCIES

```json
{
    "client":"./client/package-lock.json",
    "server":"./server/package-lock.json"
}
```

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


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
