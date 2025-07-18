import axios from "axios";

const token = localStorage.getItem("authToken");

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});

export default api;