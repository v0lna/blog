import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import headerStyle from "./style/layout.module.scss"


const Header = ({ pathname, rootPath, title }) => {
  return (
    <header>
      {pathname === rootPath ? (
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
      ) : (
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
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
        className={headerStyle.nav}
      >
        <h2 className={headerStyle.h2Style}>
          <Link
            to="/cars"
            className={headerStyle.navItem}
            activeClassName={headerStyle.activeNavItem}
          >
            Cars
          </Link>
        </h2>
        <h2 className={headerStyle.h2Style}>
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
    </header>
  )
}

export default Header
