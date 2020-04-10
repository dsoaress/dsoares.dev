import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BlogList from "../components/BlogList"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogList />
  </Layout>
)

export default BlogPage
