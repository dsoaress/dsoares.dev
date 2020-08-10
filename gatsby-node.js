const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
