import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/areas-we-cover/m11',
        destination: '/m11-corridor',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
