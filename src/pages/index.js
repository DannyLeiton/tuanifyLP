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
      <div style={{ display: `block`, float: `1`, rightMargin: `3px`, borderStyle:`dotted`, marginBottom:`10px`, padding:`5px` }}>
        <h2>To the West of San José: </h2>
        <div>
          <h3><a href="https://www.airbnb.com/h/qbo1410">Go to airbnb</a></h3>
        </div>
        <iframe style={{ minWidth: `100%`, minHeight: `550px`}} title="QBO-1410" src="https://www.airbnb.com/h/qbo1410">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
      <div style={{ display: `block`, float: `2`, lefttMargin: `3px`, borderStyle:`dotted`, padding:`5px` }}>
        <h2>To the East of San José: </h2>
        <div>
          <h3><a href="https://www.airbnb.com/h/urbn1504">Go to airbnb</a></h3>
        </div>
        <iframe style={{ minWidth: `100%`, minHeight: `550px`}} title="URBN-1504" src="https://www.airbnb.com/h/urbn1504">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  </Layout>
)

// <Link to="/page-2/">Go to page 2</Link>

export default IndexPage
