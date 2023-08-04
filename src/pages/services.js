import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ServiceItem from "../components/ServiceItem";

const services = ({ data }) => {
    const featuredPosts = data.allMarkdownRemark.nodes.filter(
        post => post.frontmatter.featured
    )

    return (

        <Layout>
            <Seo
                title="Yashar Moradi: Services"
                description="Yashar Moradi offers a range of services including Lean/Agile Coaching, Leadership Mentoring, Strategic Technology Advisory, and Fractional CTO services to help startups and established businesses achieve their technology and leadership goals."
            />
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

export default services

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
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
