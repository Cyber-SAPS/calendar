/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
  ,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'nl-NL'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'localhost',
        defaultLocale: 'en-US',
      },
      {
        domain: 'localhost.nl',
        defaultLocale: 'nl-NL',
      },
      {
        domain: 'localhost.fr',
        defaultLocale: 'fr',
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
}

module.exports = nextConfig
