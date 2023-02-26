import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ServiceItemSmall from "./ServiceItemSmall";

const FeaturedPostLoop = ({ posts }) => {
  const data = useStaticQuery(graphql`
    query featuredCountQuery {
      site {
        siteMetadata {
          featuredPostCount
        }
      }
    }
  `)

  const { featuredPostCount } = data.site.siteMetadata

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 js-post-list-wrap">
          <h2 className="h4 section-title">
            <span className="center">Services</span>
          </h2>
          {posts.map(
            (post, index) =>
              index < featuredPostCount && <ServiceItemSmall post={post} key={index} />
          )}
        </div>
      </div>
    </div>
  )
}

export default FeaturedPostLoop
