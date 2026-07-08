import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client', '@prisma/client-2c3a283f134fdcb6'],
  turbopack: {
    resolveAlias: {
      '@prisma/client-2c3a283f134fdcb6': './src/generated/prisma',
    },
  },
};

export default nextConfig;
