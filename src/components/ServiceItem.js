import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ServiceItem = props => {
  const { post } = props
  return (
    <article className="post-card flex">
      {post.frontmatter.featuredImage && (
        <Link to={post.fields.slug} className="post-img-wrap">
          <GatsbyImage
            image={getImage(post.frontmatter.featuredImage)}
            alt={post.frontmatter.title}
            style={{ height: "100%", position: "unset" }}
          />
        </Link>
      )}
      <div className="post-info-wrap">
        <h2 className="h3 post-title">
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h2>
        <div className="service-description">{post.frontmatter.description}</div>
      </div>
    </article>
  )
}

export default ServiceItem
