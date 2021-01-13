import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({filename, alt, loading, traced}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile (filter: {extension: {regex: "/jpg|png/"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 750, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        tracedImages: allFile (filter: {extension: { regex: "/png|jpg/"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 750, quality: 90, traceSVG: {color: "#1c1c1c"}) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      const tracedImage = data.tracedImages.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      if (!image && !tracedImage) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
      const imageFluidTraced = tracedImage.node.childImageSharp.fluid
      return <Img alt={alt} fluid={traced ? imageFluidTraced : imageFluid} loading={loading || "lazy"} style={{height: "100%"}} />
    }}
  />
)

export default Image
