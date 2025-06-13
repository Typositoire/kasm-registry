/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Typositoire Registry',
    description: 'Playground for Kasm Workspaces of Typositoire',
    icon: '/img/logo.svg',
    listUrl: 'https://typositoire.github.io/kasm-registry',
    contactUrl: 'https://github.com/typositoire/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
