import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { calendlyLink } from "../config/website";

const PageContainer = props => {
    const { title, image, featured } = props
    return (
        <div className="main">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-10 offset-lg-1">
                        <article className="single-post">
                            <div className="center-half">
                            { image && featured && (
                                <div className="page-featured-image-wrap">
                                    <GatsbyImage
                                        image={ getImage(image) }
                                        alt={ title }
                                    />
                                </div>
                            ) }
                            { image && !featured && (
                                <div className="featured-image-wrap">
                                    <GatsbyImage image={getImage(image)} alt={title} />
                                </div>
                            )}
                            </div>
                            { title && (
                                <header className="post-header">
                                    <h1 className="post-title">{ title }</h1>
                                </header>
                            ) }
                            { props.children }
                        </article>
                        { featured && (
                            <div className="text-center">
                            <a className="btn" href={ calendlyLink } target="_blank" rel="noreferrer">Let's
                            Connect</a>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageContainer
