module.exports = {
  siteMetadata: {
    title: `Dani Akash`,
    description: `Writer • Speaker • Hacker`,
    author: `@dani_akash_`,
    copyright: `© ${new Date().getFullYear()}.`,
    trivia: [
      "I sometimes code while listening to music",
      "I learnt javascript cuz I wanted to do form validation",
      "☝This display pic was taken so many years ago...",
      "Plain HTML & CSS is enough for most websites",
      "I don't know why I built this site with React Native",
      "Hit refresh & this text will change",
      `"One Piece... Does Exist!" ﹣ Edward Newgate`,
      "I'll write a new post soon. Please Trust me...",
      "Still no proof for string theory",
      "Climate change is real",
      "Angular isn't bad. It just doesn't have a cool logo",
      "There are people still maintaining the jQuery project. Ever think about that?",
      "You are awesome. Have a great day",
      "Hey Siri, What's this machine learning thing?",
    ],
    menu: [
      {
        label: "Blog",
        path: "/",
      },
      {
        label: "About",
        path: "/about",
      },
      {
        label: "Talks",
        path: "/categories/tech-talks",
      },
      {
        label: "Projects",
        path: "/projects",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-loadable-components-ssr`,
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: false,
    //     analyzerMode: "server",
    //     analyzerPort: "8888",
    //     defaultSizes: "gzip",
    //   },
    // },
    `gatsby-plugin-react-native-web`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-lodash`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
