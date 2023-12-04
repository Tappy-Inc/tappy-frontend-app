import { env } from "@/lib/env.mjs";

export const api = {
  auth: {
    login: async (data: { username: string; password: string }) => {
      const response = await fetch(
        `${env.NEXT_PUBLIC_API_BASE_URL}/authentication/login/`,
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    },
    session: async () => {
      const response = await fetch(
        `${env.API_BASE_URL}/authentication/session/`,
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
