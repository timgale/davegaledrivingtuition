import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const LessonPricesPage = ({ data }) => {
  return (
    <Layout pageTitle="Lesson Prices">
      <h1>Lesson Prices</h1>
        <h2>{data.wpgraphql.page.lessonPrices.beginnerLessonHeading}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.lessonPrices.beginnerLessonPriceDetails }} />
          <div>
            <p>For further details</p>
            <p>Call 07955 546075</p>
          </div>
          <div>
            <Link to="/contact">Get in touch</Link>
          </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        wpgraphql {
            page(id: "cG9zdDoxMA==") {
                lessonPrices {
                  beginnerLessonHeading
                  beginnerLessonPriceDetails
                }
            }
        }
    }  
`

export default LessonPricesPage