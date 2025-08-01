type LoginParams = {
  username: string;
  password: string;
};

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

const authProvider = {
  login: async ({ username, password }: LoginParams) => {
    // Simula un token fake y lo guarda localmente
    const fakeToken = btoa(
      JSON.stringify({ alg: "HS256", typ: "JWT" })
    ) + "." + 
    btoa(JSON.stringify({ username, roles: ['user'] })) + 
    ".signature";

    localStorage.setItem("auth_token", fakeToken);
    localStorage.setItem("username", username);
    localStorage.setItem("roles", JSON.stringify(['user']));

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
