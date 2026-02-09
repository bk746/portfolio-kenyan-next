import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    /** Racine du projet : évite la détection de lockfiles dans les répertoires parents. */
    root: process.cwd(),
  },
};

export default nextConfig;
