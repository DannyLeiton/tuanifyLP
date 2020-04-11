import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import URBN1504booklet from "../../downloads/booklets/URBN1504-booklet.pdf"

const FourthPage = () => (
  <Layout>
    <SEO title="URBN1504 rules n recommendations" />
    <h1>URBN 1504 Rules & Recommendations</h1>
    <h3>This is the main rule:</h3>
    <p>
      You are staying in a friend’s house, we expect you respect the place and take care of the apartment stuff.
    </p>
    <h4>
      <a href={URBN1504booklet} download>
        Download the booklet with all the rules and recommendations
      </a>{` `}
     </h4>
    <h1>URBN 1504 Reglas y Recomendaciones</h1>
    <h3>Esta es la principal regla:</h3>
    <p>
      Usted se está quedando en la casa de un amigo, esperamos que respete el lugar y cuide el apartamento.
    </p>
    <h4>
      <a href={URBN1504booklet} download>
       Descargue el folleto con todas las reglas y recomendaciones
      </a>{` `}
    </h4>
    <h4>
      <Link to="/URBN1504/">Go back to apartment details page</Link>
    </h4>
  </Layout>
);

export default FourthPage
