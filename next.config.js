/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dodopizza.azureedge.net',
          port: '',
        },
      ],
    },
  }