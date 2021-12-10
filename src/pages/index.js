import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                src="../images/clifford.jpeg"
            />
        </Layout>
    );
};

export default IndexPage;