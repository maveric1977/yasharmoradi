import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ServiceItem from "../components/ServiceItem";

const Services = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes
    const featuredPosts = data.allMarkdownRemark.nodes.filter(
        post => post.frontmatter.featured
    )

    return (

        <Layout>
            <Seo title="Tags" description="Tags archive"/>
            <div className="main">
                <div className="container">
                    <div className="row">
                            {featuredPosts.map(
                                (post, index) =>
                                    <div className="col-lg-6 js-post-list-wrap">
                                    <ServiceItem post={post} key={index} />
                                    </div>
                            )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Services

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fileAbsolutePath: { regex: "/content/posts/" }
      }
    ) {
      nodes {
        ...PostQueryFragment
        frontmatter {
          dateMonthYear: date(formatString: "MMMM YYYY")
          dateMonthDay: date(formatString: "MMM DD")
          dateMonth: date(formatString: "M")
        }
      }
    }
  }
`
