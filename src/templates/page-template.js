import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query ($id: ID!) {
        wpgraphql {
            page(id: $id) {
                id
                title
                content
                lessonPrices {
                    beginnerLessonHeading
                    beginnerLessonPriceDetails
                    experiencedLessonHeading
                    experiencedLessonPriceDetails
                }
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
                    sidebarCta
                }
            }
        }
    }  
`
const PageTemplate = ({ data }) => {
    const page = data.wpgraphql.page
    return (
        <Layout>
            {page.id === 'cG9xdDo4' && <span dangerouslySetInnerHTML={{ __html: page.frontPageHeroSection.tagLine }} />}
            {page.id === 'cG9zdDo4' && <span dangerouslySetInnerHTML={{ __html: page.frontPageHeroSection.telephone }} />}
            {page.id === 'cG9zdDo4' && <Link to={ page.frontPageHeroSection.heroButton.url }>{ page.frontPageHeroSection.heroButton.title }</Link>}

            <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
            <div dangerouslySetInnerHTML={{ __html: page.content }} />

            <div>
                
            </div>
            
            <div>
                {page.id === 'cG9zdDoxMA==' && <h3>{ page.lessonPrices.beginnerLessonHeading }</h3>}
                {page.id === 'cG9zdDoxMA==' && <p dangerouslySetInnerHTML={{ __html: page.lessonPrices.beginnerLessonPriceDetails}} />}
                {page.id === 'cG9zdDoxMA==' && <h3>{ page.lessonPrices.experiencedLessonHeading }</h3>}
                {page.id === 'cG9zdDoxMA==' && <p dangerouslySetInnerHTML={{ __html: page.lessonPrices.experiencedLessonPriceDetails}} />}
            </div>

            <div>
                {page.id === 'cG9zdDo4' && <h3>{ page.frontPageSidebar.sidebarHeading }</h3>}
                {page.id === 'cG9zdDo4' && <p dangerouslySetInnerHTML={{ __html: page.frontPageSidebar.sidebarContent }} />}
                {page.id === 'cG9zdDo4' && <Link to={page.frontPageSidebar.sidebarCta.url}>{ page.frontPageSidebar.sidebarCta.title }</Link>}
            </div>

        </Layout>
    )
}

export default PageTemplate