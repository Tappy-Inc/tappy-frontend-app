import { env } from "@/lib/env.mjs";

export const api = {
  auth: {
    login: async (username: string, password: string) => {},
    session: async () => {
      const response = await fetch(
        `${env.API_BASE_URL}/authentication/session`,
        {
          credentials: "include",
          method: "GET",
        },
      );

      return {
        result: await response.json(),
        status: response.status,
      };
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
