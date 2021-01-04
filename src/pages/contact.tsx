import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/pageTitle";
import SEO from "../components/SEO";

const email: string = "contact@joshuafriede.com";

const Contact: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageTitle text="Contact" />
      <p>
        Email me at <a href="mailto:{email}">{email}</a>
      </p>
    </Layout>
  );
};

export default Contact;
