import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{'Hi, I\'m Josh.'}</h1>
      <p>
        Welcome to my personal website.
      </p>
    </Layout>
  );
}