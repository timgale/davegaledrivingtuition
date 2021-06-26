import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import '../styles/layout.css'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            wpgraphql {
                generalSettings {
                    title
                    description 
                    url      
                }
                menu(id: "dGVybToz") {
                    menuItems {
                        nodes {
                            url
                            label
                            id
                        }
                    }
                }
            }
        }
    `)

    const { title, description, url } = data.wpgraphql.generalSettings
    const items = data.wpgraphql.menu.menuItems.nodes.map(item => ({
        ...item,
        url: item.url.replace(url, ""),
    }))
    return (
        <>
            <header>
                <Link to="/" className="home">
                    { title }
                    <br />
                    { description }
                </Link>
                {items.map(item => (
                    <Link to={item.url} key={item.id}>
                        {item.label}
                    </Link>
                ))}
            </header>
            <main>{children}</main>
        </>
    )
}

export default Layout