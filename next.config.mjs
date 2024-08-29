// next.config.mjs

export default {
    reactStrictMode: true, // Enables React Strict Mode
    env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL, // Custom environment variables
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
    i18n: {
      locales: ['en', 'fr'], // Example: Internationalization configuration
      defaultLocale: 'en',
    },
    webpack: (config, { isServer }) => {
      // Custom webpack configuration
      if (!isServer) {
        config.resolve.fallback.fs = false; // Example: Polyfill Node.js modules
      }
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname: '/**',
        },
      ],
    },
  };
  