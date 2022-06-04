import axios from "axios";
import { app } from "./app-instance";

const authInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export const login = (loginForm) => {
  return authInstance.post("auth/login", loginForm);
};

export const register = (registerForm) => {
  return authInstance.post("auth/register", registerForm);
};

export const newPatientPassword = (newPasswordForm) => {
  return app.post("api/users/new-password", newPasswordForm);
};
