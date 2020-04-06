import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import NotFound from "../components/NotFound"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
