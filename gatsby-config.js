module.exports = {
  siteMetadata: {
    title: `Dani Akash`,
    description: `Writer • Speaker • Hacker`,
    author: `@dani_akash_`,
    copyright: `© All rights reserved.`,
    trivia: [
      "I sometimes code while listening to music",
      "I learnt javascript cuz I wanted to do form validation",
      "☝This display pic was taken so many years ago...",
    ],
    menu: [
      {
        label: "blog",
        path: "/",
      },
      {
        label: "about",
        path: "/about",
      },
      {
        label: "talks",
        path: "/talks",
      },
      {
        label: "projects",
        path: "/projects",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-native-web`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
