import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Dear Guest,</h2>
    <p><b>Welcome to the Tuanify Xperience.</b></p>
    <p><i>Feel free to book our Listings!</i></p>
    <div style={{ display: `float` }}>
      <div style={{ float: `left`, rightMargin: `10px`, borderStyle:`dotted`, padding: `10px` }}>
        <h2>To the West of San José:</h2>
        <iframe style={{ minWidth: `420px`, minHeight: `550px`}} title="QBO-1410" src="https://www.airbnb.com/h/qbo1410">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
      <div style={{ float: `right`, lefttMargin: `10px`, borderStyle:`dotted`, padding: `10px` }}>
        <h2>To the East of San José:</h2>
        <iframe style={{ minWidth: `420px`, minHeight: `550px`}} title="URBN-1504" src="https://www.airbnb.com/h/urbn1504">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  </Layout>
)

// <Link to="/page-2/">Go to page 2</Link>

export default IndexPage
