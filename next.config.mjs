/** @type {import('next').NextConfig} */

import { merge } from "webpack-merge";
import path from "path";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (isServer) {
      return merge(config, {
        entry() {
          return config.entry().then((entry) => {
            return Object.assign({}, entry, {
              "collection.worker": path.resolve(
                process.cwd(),
                "collection.worker.ts"
              ),
            });
          });
        },
      });
    } else {
      return config;
    }
  },
};

export default nextConfig;
