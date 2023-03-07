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
            <Seo
                title="Insights on Technology, Leadership, and Innovation"
                description="Yashar Moradi's blog offers thought-provoking insights and practical advice on technology, leadership, and innovation to help businesses succeed in today's fast-paced digital landscape."
            />
            <div className="main">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10 offset-lg-1">
                            <article className="single-post">
                                <header className="post-header">
                                    <h1 className="post-title text-center">Yashar Moradi's Blog</h1>
                                </header>
                                    { blogPosts.length > 0 && (
                                        <PostLoop
                                            posts={ blogPosts }
                                            // postPerPage={ data.site.siteMetadata.postPerPage }
                                            sectionTitle=""
                                        />
                                    ) }
                            </article>
                        </div>
                    </div>
                </div>
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
