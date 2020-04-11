import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import QBO1410booklet from "../../downloads/booklets/QBO1410-booklet.pdf";

const FifthPage = () => (
  <Layout>
    <SEO title="QBO1410 rules n recommendations" />
    <h1>QBO 1410 Rules & Recommendations</h1>
    <h3>This is the main rule:</h3>
    <p>
      You are staying in a friend’s house, we expect you respect the place and take care of the apartment stuff.
    </p>
    <h4>
      <a href={QBO1410booklet} download>
        Download the booklet with all the rules and recommendations
      </a>{` `}
    </h4>
    <h1>QBO 1410 Reglas y Recomendaciones</h1>
    <h3>Esta es la principal regla:</h3>
    <p>
      Usted se está quedando en la casa de un amigo, esperamos que respete el lugar y cuide el apartamento.
    </p>
    <h4>
      <a href={QBO1410booklet} download>
        Descargue el folleto con todas las reglas y recomendaciones
      </a>{` `}
    </h4>
    <h4>
      <Link to="/QBO1410/">Go back to apartment details page</Link>
    </h4>
  </Layout>
);

export default FifthPage
