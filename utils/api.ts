export const api = {
  auth: {
    login: async (username: string, password: string) => {},
    session: async () => {
      const response = await fetch("", {
        credentials: "include",
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    },
    accessToken: async () => {},
    refreshToken: async (accessToken: string) => {},
    logout: async () => {},
  },
  simulatePromise: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Request successful");
      }, 3000);
    });
  },
};
