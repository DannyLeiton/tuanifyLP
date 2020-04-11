import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="QBO1410" />
    <h1>QBO 1410 Details</h1>
    <p>
      This is a fully equipped studio apartment in luxury tower located in the best zone of San José, Costa Rica.
      With AC, King size bed and safe roofed Parking spot.
      20min far the Airport. 10min from Convention Center. Close to town, safe zone, many restaurants and parks around.
      Great view from a 14th floor, heated pool, gym, jacuzzi, steam bath and co-working spaces.
      Perfect for executives, couples or solo travelers.
      For 3 or 4 people, there's a Queen Size air mattress and extra sheets.
    </p>
    <h4>
      <Link to="/QBO1410/booklet">Check Rules and Recommendations</Link>
    </h4>
    <h4>
      <Link to="/">Go back to the homepage</Link>
    </h4>
  </Layout>
);

export default ThirdPage
