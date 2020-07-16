module.exports = {
  siteMetadata: {
    title: `Dani Akash`,
    info: `Writer • Speaker • Hacker`,
    description: `Dani Akash is a JavaScript developer from Chennai who builds mobile and web applications with React. While he is not coding, he teaches people how to code. He spends his free time building open-source projects and writing blogs.`,
    twitterHandle: `@dani_akash_`,
    homepage: `https://daniakash.com`,
    links: {
      github: `https://github.com/DaniAkash`,
      trello: `https://trello.com/b/1zB34Jab/whats-dani-upto`,
      nodemodules: `https://nodemodules.xyz`,
      javascriptByExample: `https://www.amazon.in/JavaScript-Example-Dani-Akash/dp/1788293967`,
      twitter: `https://twitter.com/dani_akash_`,
      scienceandstardust: `https://scienceandstardust.com`,
      myanimelist: `https://myanimelist.net/profile/PirateHunter`,
      linkedIn: `https://www.linkedin.com/in/daniakash`,
      stackoverflow: `https://stackoverflow.com/users/5597641/dani-akash`,
      instagram: `https://instagram.com/dani_akash_`,
      reddit: `https://www.reddit.com/user/dani_akash_`,
      facebook: `https://facebook.com/DaniAkash`,
    },
    copyright: `© ${new Date().getFullYear()}.`,
    trivia: [
      "I sometimes code while listening to music",
      "I learnt javascript cuz I wanted to do form validation",
      "☝This display pic was taken so many years ago...",
      "Plain HTML & CSS is enough for most websites",
      "This site was built with React Native as an experiment",
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
        label: "Home",
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
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
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
    `gatsby-plugin-lodash`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          locale: "en_IN",
          url: "https://daniakash.com/",
          site_name: "DaniAkash",
        },
        twitter: {
          handle: "@dani_akash_",
          site: "@dani_akash_",
          cardType: "summary_large_image",
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                homepage
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.homepage + edge.node.frontmatter.path,
                  guid: site.siteMetadata.homepage + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {draft: {ne: true}}}
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        date
                        description
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dani Akash`,
        short_name: `Dani`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `rgba(2, 62, 114, 1)`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
