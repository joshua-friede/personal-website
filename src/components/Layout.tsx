import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Footer from "./Footer";
import Header from "./Header";

export const siteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  const siteMetadata = useStaticQuery(siteMetadataQuery).site.siteMetadata;
  return (
    <div className="max-w-2xl mx-auto px-4 pt-12 pb-12 text-lg">
      <Header siteMetadata={siteMetadata} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
