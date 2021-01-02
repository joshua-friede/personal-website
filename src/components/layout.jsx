import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, Link, graphql } from 'gatsby';

const ListLink = ({ to, children }) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={to}>{children}</Link>
  </li>
);
ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return (
    <div
      id="wrapper"
      style={{
        margin: '0 auto', maxWidth: 650, padding: '3rem 1rem', position: 'relative', minHeight: '100vh',
      }}
    >
      <header style={{ marginBottom: '1.5rem' }}>
        <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
          <h3 style={{ display: 'inline' }}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul style={{ listStyle: 'none', float: 'right' }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <footer style={{ position: 'absolute', bottom: 0, height: '3rem' }}>
        <p><Link to="https://github.com/joshua-friede/personal-website">Designed and Built by Joshua Friede</Link></p>
      </footer>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
