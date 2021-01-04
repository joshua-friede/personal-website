import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

type MetaItem = {
  name: string;
  content: string;
};

type SEOProps = {
  title?: string;
  author?: string;
  description?: string;
  lang?: string;
  meta?: MetaItem[];
};

const SEO: React.FC<SEOProps> = (props) => {
  const siteMetadata = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  ).site.siteMetadata;

  const title: string = props.title || siteMetadata.title;
  const description: string = props.description || siteMetadata.description;
  const lang: string = props.lang || siteMetadata.lang;
  const author: string = props.author || siteMetadata.author;
  const meta: MetaItem[] = [
    {
      name: "og:title",
      content: title,
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "author",
      content: author,
    },
    {
      name: "og:author",
      content: author,
    },
    {
      name: "og:type",
      content: "website",
    },
  ].concat(props.meta || []);

  return (
    <Helmet
      htmlAttributes={{ lang: lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={meta}
    />
  );
};

export default SEO;
