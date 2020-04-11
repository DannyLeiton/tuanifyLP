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
      <div style={{ display: `block`, float: `2`, marginBottom: `3px`, borderStyle:`dotted`, padding:`5px` }}>
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
      <div style={{ display: `block`, float: `1`, borderStyle:`dotted`, marginBottom:`10px`, padding:`5px` }}>
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
    <div style={{ display: `float`, marginBottom: `3rem`}}>
      <div style={{ float: `left` }}>
        <h3>Help us with a tip or pay for damaged stuff:</h3>
      </div>
      <div style={{ float: `right` }}>
       <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
         <input type="hidden" name="cmd" value="_s-xclick" />
         <input type="hidden" name="hosted_button_id" value="5F3N8G9TNTMH2" />
         <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
         <img alt="" border="0" src="https://www.paypal.com/en_CR/i/scr/pixel.gif" width="1" height="1" />
       </form>
      </div>
    </div>
    <div style={{ display: `float` }}>
      <div style={{ float: `left` }}>
        <h3>Ayúdenos con una propina o pague por daños:</h3>
      </div>
      <div style={{ float: `right` }}>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="5F3N8G9TNTMH2" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_CR/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  </Layout>
);

export default IndexPage
