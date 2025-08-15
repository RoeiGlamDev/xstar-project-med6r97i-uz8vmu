import { NextIntlProvider } from 'next-intl';
import nextConfig from './next.config.mjs';

const config = {
  ...nextConfig,
  images: {
    domains: [], // Add your image domain here
  },
  experimental: {
    optimizeCss: true
}
};

export const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add your image domain here
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
},
    ];
  },
  async rewrites() {
    return [
      {
        source: '/products/:slug',
        destination: '/product/:slug'
},
    ];
  }
};

export default config;