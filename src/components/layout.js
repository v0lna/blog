import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import headerStyle from "./style/layout.module.scss"

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
            <Link to={`/`} className={headerStyle.navHeader}>
              {title}
            </Link>
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
            className={headerStyle.nav}
          >
            <h2 style={h2Style}>
              <Link
                to="/cars"
                className={headerStyle.navItem}
                activeClassName={headerStyle.activeNavItem}
              >
                Cars
              </Link>
            </h2>
            <h2 style={h2Style}>
              {" "}
              <Link
                to="/car-parts"
                className={headerStyle.navItem}
                activeClassName={headerStyle.activeNavItem}
              >
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
            <Link className={headerStyle.navHeader} to={`/`}>
              {title}
            </Link>
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
            className={headerStyle.nav}
          >
            <h2 style={h2Style}>
              <Link
                to="/cars"
                className={headerStyle.navItem}
                activeClassName={headerStyle.activeNavItem}
              >
                Cars
              </Link>
            </h2>
            <h2 style={h2Style}>
              {" "}
              <Link
                to="/car-parts"
                className={headerStyle.navItem}
                activeClassName={headerStyle.activeNavItem}
              >
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
