// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise(async (resolve, reject) => {
//     const result = await graphql(`
//       query createBlogPosts {
//         allMarkdownRemark {
//           nodes {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     `)
//     if (result.errors) {
//       console.error(result.errors)
//       reject(result.errors)
//     }
//     result.data.allMarkdownRemark.nodes.forEach(node => {
//       const { path } = node.frontmatter
//       createPage({
//         path,
//         component: () => null,
//         context: {
//           pathSlug: path,
//         },
//       })
//     })
//     resolve()
//   })
// }
