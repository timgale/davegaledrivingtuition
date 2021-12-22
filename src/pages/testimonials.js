import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const TestimonialsPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <h1>Testimonials</h1>
      <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content }} />
        <h2>What people are saying about Dave Gale Driving Tuition</h2>
    </Layout>
  )
}

export const query = graphql`
    query {
        wpgraphql {
            page(id: "cG9zdDoxMg==") {
                content
            }
        }
    }
`

export default TestimonialsPage