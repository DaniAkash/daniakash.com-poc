const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const template = path.resolve("./src/components/Templates/Post.tsx")

  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
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
  const { nodes } = result.data.allMarkdownRemark
  nodes.forEach((node, nodeIndex) => {
    const nextPost = nodeIndex === 0 ? null : nodes[nodeIndex - 1]
    const previousPost =
      nodeIndex === nodes.length - 1 ? null : nodes[nodeIndex + 1]

    const { path: postPath } = node.frontmatter
    if (postPath) {
      createPage({
        path: postPath,
        component: template,
        context: {
          pathSlug: postPath,
          previousPost,
          nextPost,
        },
      })
    }
  })
}
