import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <h1>Not Found</h1>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
