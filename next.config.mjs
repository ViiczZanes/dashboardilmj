/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt/dashboard',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
