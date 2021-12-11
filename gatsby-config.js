module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "First Gatsby Site",
    description: "This site is a very useful example of how Gatsby is a fire!"
  },
  plugins: [
      "gatsby-plugin-sass",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
            name: `blog`,
            path: `${__dirname}/blog`
        },
      },
        "gatsby-plugin-mdx",
    ],
};
