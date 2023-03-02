import * as React from "react"
import Layout from "../components/Layout"
import PostLoop from "../components/PostLoop"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

// markup
const BlogPage = ({ data }) => {
    const blogPosts = data.allMarkdownRemark.nodes.filter(
        post => !post.frontmatter.featured
    )
    return (
        <Layout>
            <Seo homePage={ true }/>
            <div className="main">
                { blogPosts.length > 0 && (
                    <PostLoop
                        posts={ blogPosts }
                        // postPerPage={ data.site.siteMetadata.postPerPage }
                        sectionTitle=""
                    />
                ) }
            </div>
        </Layout>
    )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        featuredPostCount
        postPerPage
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fileAbsolutePath: { regex: "/content/posts/" }
      }
    ) {
      nodes {
        ...PostQueryFragment
      }
    }
  }
`
