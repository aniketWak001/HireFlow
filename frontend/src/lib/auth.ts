import { api } from "./api.js";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "candidate" | "recruiter" | "admin";
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export async function register(data: {
  name: string;
  email: string;
  password: string;
  role: "candidate" | "recruiter";
}): Promise<User> {
  const res = await api.post("/api/v1/auth/register", data);
  return res.data.data as User;
}

export async function login(data: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const res = await api.post("/api/v1/auth/login", data);
  const { accessToken, refreshToken, user } = res.data.data as AuthResponse;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("user", JSON.stringify(user));
  return { accessToken, refreshToken, user };
}

export function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  window.location.href = "/login";
}

export function getUser(): User | null {
  const user = localStorage.getItem("user");
  return user ? (JSON.parse(user) as User) : null;
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("accessToken");
}
