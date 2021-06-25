module.exports = {
  siteMetadata: {
    title: "davegaledrivingtuition",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: "http://www.davegaledrivingtuition.co.uk/graphql",
        debug: {
          graphql: {
            copyHtmlResponseOnError: true
          }
        },
      },
    },
  ],
};
