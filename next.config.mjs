await import("./lib/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.DOCKER_ENABLED === "1" ? "standalone" : undefined,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
