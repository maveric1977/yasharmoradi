import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";

const HomeFeature = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 js-post-list-wrap">
                    <Link to="https://agile4life.yasharmoradi.com" target="_blank">
                        <StaticImage
                            src="../assets/images/agile4life-banner.jpg"
                            alt={`Cover`}
                            placeholder="blurred"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeFeature
