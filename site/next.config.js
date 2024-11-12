/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Typositoire\'s Registry',
    description: 'My Own Kasm Registry',
    icon: 'https://typositoire.github.io/kasm-registry/1.0/image.png',
    listUrl: 'https://typositoire.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Typositoire/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
