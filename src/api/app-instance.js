import axios from "axios";

const app = axios.create({
  baseURL: "http://www.localhost:5000",
});

const getToken = () => {
  return localStorage.getItem("token");
};

app.interceptors.request.use(function (config) {
  const token = getToken();
  config.headers["x-auth-token"] = token ? `${token}` : "";
  return config;
});

export { app };
