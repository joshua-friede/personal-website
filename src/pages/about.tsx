import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/pageTitle";
import SEO from "../components/SEO";

const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <PageTitle text="About me" />
      <p>
        I&apos;m a software developer based in Austin, Texas. After graduating
        from The University of Iowa, I joined Charles Schwab where I work on
        their predictive marketing platform.
      </p>
    </Layout>
  );
};

export default About;
