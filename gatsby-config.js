module.exports = {
  siteMetadata: {
    title: "Joshua Friede",
    description: "Joshua Friede is a software developer",
    author: "Joshua Friede",
    lang: "en",
    siteUrl: "https://www.joshuafriede.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Joshua Friede",
        short_name: "JoshuaFriede",
        icon: "src/images/icon.png",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-eslint",
  ],
};
