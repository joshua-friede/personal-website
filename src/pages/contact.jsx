import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <h1>Email me at the address below</h1>
        <p>
          <a href="mailto:contact@joshuafriede.com">contact@joshuafriede.com</a>
        </p>
      </div>
    </Layout>
  );
}
