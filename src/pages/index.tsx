import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import SEO from "../components/SEO";

const Home: React.FC = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <PageTitle text="Hi, I'm Josh." />
      <p>
        Welcome! I wrote this website in TypeScript using Gatsby, a framework
        based on ReactJS, and am hosting on Google Cloud Storage.
      </p>
    </Layout>
  );
};

export default Home;
