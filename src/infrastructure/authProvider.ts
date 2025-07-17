type LoginParams = {
  username: string;
  password: string;
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

const authProvider = {
  login: async ({ username, password }: LoginParams) => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      return Promise.reject();
    }

    const { token } = await response.json();
    if (!token) {
      return Promise.reject();
    }

    localStorage.setItem("auth_token", token);

    const decoded = parseJwt(token);
    if (decoded) {
      if (decoded.username) {
        localStorage.setItem("username", decoded.username);
      }
      if (decoded.roles) {
        localStorage.setItem("roles", JSON.stringify(decoded.roles));
      }
    }

    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem("auth_token") ? Promise.resolve() : Promise.reject(),

  checkError: (error: any) =>
    error.status === 401 || error.status === 403
      ? Promise.reject()
      : Promise.resolve(),

  getPermissions: () => Promise.resolve(),
};

export default authProvider;
