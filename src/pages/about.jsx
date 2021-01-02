import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h1>About me</h1>
        <p>
          {'I\'m a software developer based in Austin, Texas. After graduating from The University of Iowa, I joined Charles Schwab where I work on predictive marketing and big data.'}
        </p>
      </div>
    </Layout>
  );
}
