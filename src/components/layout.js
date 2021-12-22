import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import '../styles/layout.css'

const Layout = ({ pageTitle, children }) => {
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
            <header id="main_header">
                <Link to="/" className="home">
                    <h1>{ title }</h1>
                    <h2>{ description }</h2>
                </Link>
                <nav id="main_nav">
                    {items.map(item => (
                        <Link to={item.url} key={item.id}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <nav id="main_nav">
                    {items.map(item => (
                        <Link to={item.url} key={item.id}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </footer>
            <div>
                <p>Copyright © 2021 Dave Gale Driving Tuition. All rights reserved.</p> 
            </div>
        </>
    )
}

export default Layout