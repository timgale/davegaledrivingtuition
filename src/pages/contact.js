import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = ({ data }) => {
  return (
    <Layout pageTitle="Contact">
      <h1>Contact</h1>

      <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content }} />
    </Layout>
  )
}

export const query = graphql`
    query {
        wpgraphql {
            page(id: "cG9zdDoxNA==") {
                content
            }
        }
    }
`

export default ContactPage