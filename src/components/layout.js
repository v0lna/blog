import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const linkStyle = {
  boxShadow: `none`,
  textDecoration: `none`,
  color: `inherit`,
}

const h2Style = {
  marginTop: "5px",
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link style={linkStyle} to={`/`}>
              {title}
            </Link>
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <h2 style={h2Style}>
              <Link style={linkStyle} to="/cars">
                Cars
              </Link>
            </h2>
            <h2 style={h2Style}>
              {" "}
              <Link style={linkStyle} to="/car-parts">
                Cars parts
              </Link>
            </h2>
          </div>
        </>
      )
    } else {
      header = (
        <>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <h2 style={h2Style}>
              <Link style={linkStyle} to="/cars">
                Cars
              </Link>
            </h2>
            <h2 style={h2Style}>
              {" "}
              <Link style={linkStyle} to="/car-parts">
                Car parts
              </Link>
            </h2>
          </div>
        </>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
