const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const PostTemplate = path.resolve("./src/components/Templates/Post.tsx")
  const Category = path.resolve("./src/pages/category.tsx")
  const Tags = path.resolve("./src/pages/tags.tsx")

  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: {
          frontmatter: {
            draft: { ne: true }
            url: { eq: null }
            path: { ne: null }
          }
        }
      ) {
        nodes {
          frontmatter {
            path
            title
            tags
            category
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
    return
  }
  const { nodes = [] } = result.data.allMarkdownRemark
  nodes.forEach((node, nodeIndex) => {
    const nextPost = nodeIndex === 0 ? null : nodes[nodeIndex - 1]
    const previousPost =
      nodeIndex === nodes.length - 1 ? null : nodes[nodeIndex + 1]

    const { path: postPath } = node.frontmatter
    if (postPath) {
      createPage({
        path: postPath,
        component: PostTemplate,
        context: {
          pathSlug: postPath,
          previousPost,
          nextPost,
        },
      })
    }

    let tags = []
    if (_.get(node, "frontmatter.tags")) {
      tags = tags.concat(node.frontmatter.tags)
    }
    tags = _.uniq(tags)
    _.each(tags, tag => {
      if (tag) {
        const tagPath = `/tags/${_.kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: Tags,
          context: { tag },
        })
      }
    })

    let categories = []
    if (_.get(node, "frontmatter.category")) {
      categories = categories.concat(node.frontmatter.category)
    }
    categories = _.uniq(categories)
    _.each(categories, category => {
      if (category) {
        const categoryPath = `/categories/${_.kebabCase(category)}/`
        createPage({
          path: categoryPath,
          component: Category,
          context: { category },
        })
      }
    })
  })
}
