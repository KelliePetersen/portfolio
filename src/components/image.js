import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({filename, alt, loading}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile (filter: {extension: {eq: "jpg"}}) {
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
      }
    `}
    
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })
      if (!image) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
      return <Img alt={alt} fluid={imageFluid} loading={loading || "lazy"} style={{height: "100%", opacity: "0.75"}} />
    }}
  />
)

export default Image
