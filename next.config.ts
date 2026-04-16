import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@Team-Trung-Vu-Khang/eco-shared-ui"],
  async rewrites() {
    return [
      {
        source: "/farm",
        destination: "https://eco-farm-app-demo.vercel.app/farm",
      },
      {
        source: "/farm/:path*",
        destination: "https://eco-farm-app-demo.vercel.app/farm/:path*",
      },
      {
        source: "/factory/:path*",
        destination: "http://localhost:3002/factory/:path*",
      },
    ];
  },
};

export default nextConfig;
