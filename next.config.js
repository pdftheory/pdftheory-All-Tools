import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withBundleAnalyzer = (await import('@next/bundle-analyzer')).default({
  enabled: process.env.ANALYZE === 'true',
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

      // Advanced Chunking Optimization - Phase 11
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        // Isolate Heavy Libraries
        pdfjs: {
          test: /[\\/]node_modules[\\/](pdfjs-dist|pdfjs-dist-legacy)[\\/]/,
          name: 'vendor-pdfjs',
          chunks: 'all',
          priority: 40,
        },
        pdflib: {
          test: /[\\/]node_modules[\\/]pdf-lib[\\/]/,
          name: 'vendor-pdflib',
          chunks: 'all',
          priority: 35,
        },
        tesseract: {
          test: /[\\/]node_modules[\\/]tesseract\.js[\\/]/,
          name: 'vendor-tesseract',
          chunks: 'all',
          priority: 30,
        },
        reactflow: {
          test: /[\\/]node_modules[\\/]reactflow[\\/]/,
          name: 'vendor-reactflow',
          chunks: 'all',
          priority: 25,
        },
        xlsx: {
          test: /[\\/]node_modules[\\/]xlsx[\\/]/,
          name: 'vendor-xlsx',
          chunks: 'all',
          priority: 20,
        },
        common: {
          name: 'common-utils',
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
  trailingSlash: false, // OPTIMIZATION: Removed trailing slashes for zero-redirect root access
  reactStrictMode: true,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },

};

export default withBundleAnalyzer(withNextIntl(nextConfig));
