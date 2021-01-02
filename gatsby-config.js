module.exports = {
  siteMetadata: {
    title: 'Joshua Friede',
    description: 'Joshua Friede is a software developer based in Austin, Texas ',
    author: 'Joshua Friede',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Joshua Friede',
        short_name: 'JoshuaFriede',
        start_url: '/',
        lang: 'en',
        background_color: '#fff',
        theme_color: '#6b37bf',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
};
