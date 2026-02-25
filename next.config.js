import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withBundleAnalyzer = (await import('@next/bundle-analyzer')).default({
  enabled: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    // Disable persistent cache to avoid too many open files on Windows
    config.cache = false;

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, path: false, crypto: false, module: false, url: false,
        worker_threads: false, canvas: false,
      };

      // Advanced Chunking Optimization
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        pdfjs: {
          test: /[\\/]node_modules[\\/]pdfjs-dist[\\/]/,
          name: 'pdfjs',
          chunks: 'all',
          priority: 30,
        },
        common: {
          name: 'common',
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
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
  compress: true, // Enable gzip compression
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },

};

export default withBundleAnalyzer(withNextIntl(nextConfig));
