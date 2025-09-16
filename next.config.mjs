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
        {
        protocol: 'https',
        hostname: 'www.numonday.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'aromatica.cr',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'leparfumpr.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nrperfumesarabes.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'fragrances.com.ng',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fimgs.net',
        pathname: '/**',
      },
         {
        protocol: 'https',
        hostname: 'orientedistribuidora.com.ar',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'arabicparfums.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imperian.co.uk',
        pathname: '/**',
      },
      {
                protocol: 'https',
                hostname: 'oasisperfumesusa.com', // Added this line to fix the error
                pathname: '/**',
            },
             {
                protocol: 'https',
                hostname: 'orientaldream.b-cdn.net', // New hostname added here
                pathname: '/**',
            },
    ],
  },
};

export default nextConfig;
