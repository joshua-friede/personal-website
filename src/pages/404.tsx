import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <PageTitle text="Not Found" />
      <p>
        <Link to="/">Go home</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
