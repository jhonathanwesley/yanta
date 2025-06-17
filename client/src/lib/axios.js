import axios from "axios";

// Em produção, não existe localhost então a URL base precisa ser dinâmica
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" :"/api";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
