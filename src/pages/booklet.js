import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="URBN1504" />
    <h1>URBN 1504 Details</h1>
    <p>
      This is a very nice 1 bedroom apartment on the 15th floor of a new and well decorated tower located in the Gastronomic and Party Zone of San José.
      Barrio Escalante is very popular because of the big quantity of gastronomic options around.
      With own parking spot. It has a fully equipped kitchen, dinning table, living room with stereo and a nice sofa bed for a second couple.
      The bedroom with a Super Comfy Queen size bed, 47 inch Screen and closet.
      For more info and pics of the tower check: <a href="https://www.urbnescalante.com">urbnescalante.com</a>.
    </p>
    <h4>
      <Link to="/URBN1504/booklet">Check Rules and Recommendations</Link>
    </h4>
    <h4>
    <Link to="/">Go back to the homepage</Link>
   </h4>
  </Layout>
);

export default SecondPage
