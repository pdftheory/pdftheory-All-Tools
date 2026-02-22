import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, path: false, crypto: false, module: false, url: false,
        worker_threads: false, canvas: false,
      };
    } else {
      config.externals = config.externals || [];
      config.externals.push({ canvas: 'commonjs canvas' });
    }
    config.resolve.alias = { ...config.resolve.alias, 'module': false };
    config.plugins.push(
      new webpack.IgnorePlugin({ resourceRegExp: /^module$/ }),
      new webpack.IgnorePlugin({ resourceRegExp: /^canvas$/, contextRegExp: /pdfjs-dist-legacy/ })
    );
    config.experiments = { ...config.experiments, asyncWebAssembly: true };
    return config;
  },
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,

};

export default withNextIntl(nextConfig);
