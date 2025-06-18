type LoginParams = {
  username: string;
  password: string;
};

const API_URL = import.meta.env.VITE_API_URL || "";

const parseJwt = (token: string) =>
  JSON.parse(atob(token.split(".")[1]));

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

    localStorage.setItem("token", token);

    try {
      const decoded = parseJwt(token);
      if (decoded?.username) {
        localStorage.setItem("username", decoded.username);
      }
      if (decoded?.roles) {
        localStorage.setItem("roles", JSON.stringify(decoded.roles));
      }
    } catch {
      // Ignore decoding errors
    }

    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    return Promise.resolve();
  },
  checkAuth: () => {
    const token = localStorage.getItem("token");
    return token ? Promise.resolve() : Promise.reject();
  },
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
