const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const template = path.resolve("./src/components/Templates/Post.tsx")

  const result = await graphql(`
    query createBlogPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
    return
  }
  result.data.allMarkdownRemark.nodes.forEach(node => {
    const { path: postPath } = node.frontmatter
    if (postPath) {
      createPage({
        path: postPath,
        component: template,
        context: {
          pathSlug: postPath,
        },
      })
    }
  })
}
