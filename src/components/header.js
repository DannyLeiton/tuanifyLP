import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TuanifyLogo from "./tuanifyLogo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 0 0`,
      }}
    >
      <h1 style={{ marginRight: "auto", marginLeft: "auto", maxHeight: 500, maxWidth: 500, }}>
        <Link
          to="/"
          style={{
            color: `red`,
            textDecoration: `none`,
          }}
        >
          <TuanifyLogo />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
