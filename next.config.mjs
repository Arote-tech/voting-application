
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.gettyimages.com',
        port: '',
        pathname: '/photo**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
