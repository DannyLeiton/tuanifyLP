import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Dear Guest,</h2>
    <p><b>Welcome to the Tuanify Xperience.</b></p>
    <p><i>Feel free to book our Short-term Rentals!</i></p>
    <div style={{ display: `float` }}>
      <div style={{ display: `block`, float: `2`, lefttMargin: `3px`, borderStyle:`dotted`, padding:`5px` }}>
        <h2>To the East of San José, we have URBN 1504: </h2>
        <div>
          <h4>
            <Link to="/URBN1504/">More info about URBN 1504</Link>
          </h4>
        </div>
        <iframe style={{ minWidth: `100%`, minHeight: `550px`}} title="URBN-1504" src="https://www.airbnb.com/h/urbn1504">
          <p>Your browser does not support iframes.</p>
        </iframe>
        <div>
          <h3><a href="https://www.airbnb.com/h/urbn1504">Check URBN 1504 at airbnb</a></h3>
        </div>
      </div>
      <div style={{ display: `block`, float: `1`, rightMargin: `3px`, borderStyle:`dotted`, marginBottom:`10px`, padding:`5px` }}>
        <h2>To the West of San José, we have QBO 1410: </h2>
        <div>
          <h4>
            <Link to="/QBO1410/">More info about QBO 1410</Link>
          </h4>
        </div>
        <iframe style={{ minWidth: `100%`, minHeight: `550px`}} title="QBO-1410" src="https://www.airbnb.com/h/qbo1410">
          <p>Your browser does not support iframes.</p>
        </iframe>
        <div>
          <h3><a href="https://www.airbnb.com/h/qbo1410">Check QBO 1410 at airbnb</a></h3>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage
