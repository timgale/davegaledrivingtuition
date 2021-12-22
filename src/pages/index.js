import { Link, graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
        
        <div className="hero">
            <p>{data.wpgraphql.page.frontPageHeroSection.tagLine}</p>
            <p>{data.wpgraphql.page.frontPageHeroSection.telephone}</p>
            <Link to={data.wpgraphql.page.frontPageHeroSection.heroButton.url}>{data.wpgraphql.page.frontPageHeroSection.heroButton.title}</Link>
        </div>

        <div className="main">
            <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.content }} />
        </div>

        <div className="sidebar">
            <h2>{data.wpgraphql.page.frontPageSidebar.sidebarHeading}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.page.frontPageSidebar.sidebarContent}} />
        </div>

    </Layout>
  )
}

export const query = graphql`
    query {
        wpgraphql {
            page(id: "cG9zdDo4") {
                frontPageHeroSection {
                    tagLine
                    telephone
                    heroButton {
                        url
                        title
                    }
                }
                frontPageSidebar {
                    sidebarHeading
                    sidebarContent
                }
                content
            }
        }
    }  
`

export default IndexPage