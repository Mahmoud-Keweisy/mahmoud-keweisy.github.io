const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
