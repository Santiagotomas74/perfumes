/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'perfumescardales.com.ar',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hites.com',
        pathname: '/dw/image/v2/BDPN_PRD/on/demandware.static/-/Sites-mastercatalog_HITES/default/**',
      },
       {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'acdn-us.mitiendanube.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.intenseoud.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'emiratesoud.co.uk',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'i0.wp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.awsli.com.br',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
