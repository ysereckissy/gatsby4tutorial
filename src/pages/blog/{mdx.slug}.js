import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';

const BlogPost = (props) => {
    console.log(props)
    const { data } = props;
    const image = getImage(data.mdx.frontmatter.hero_image);
    console.log(image);
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
            <p>
                Photo Credit: {" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}, frontmatter: {}) {
            frontmatter {
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            title
            date(formatString: "MMMM D, YYYY")
            }
            body
        }
    }
`;

export default BlogPost;