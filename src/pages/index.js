import * as React from "react"
import HomeHero from "../components/HomeHero"
import Layout from "../components/Layout"
import PostLoop from "../components/PostLoop"
import { graphql } from "gatsby"
import FeaturedPostLoop from "../components/FeaturedPostLoop"
import Seo from "../components/Seo"

// markup
const IndexPage = ({ data }) => {
    const featuredPosts = data.allMarkdownRemark.nodes.filter(
        post => post.frontmatter.featured
    )
    const blogPosts = data.allMarkdownRemark.nodes.filter(
        post => !post.frontmatter.featured
    )
    return (
        <Layout>
            <Seo homePage={ true }/>
            <HomeHero/>
            <div className="main">
                { featuredPosts.length > 0 && (
                    <FeaturedPostLoop
                        posts={ featuredPosts }
                        featuredPostCount={ data.site.siteMetadata.featuredPostCount }
                    />
                ) }
                { blogPosts.length > 0 && (
                    <PostLoop
                        posts={ blogPosts }
                        postPerPage={ data.site.siteMetadata.postPerPage }
                        sectionTitle="Latest post"
                    />
                ) }
            </div>
        </Layout>
    )
}

export default IndexPage

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
      sort: { fields: frontmatter___title, order: ASC }
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
