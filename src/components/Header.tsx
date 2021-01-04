import { Link } from "gatsby";
import React from "react";

type HeaderProps = {
  siteMetadata: any;
};

const Header: React.FC<HeaderProps> = ({ siteMetadata }) => {
  return (
    <header className="mb-12">
      <h3 className="inline text-2xl font-semibold">{siteMetadata.title}</h3>
      <nav className="float-right">
        <Link className={classes.navLink} to="/">
          Home
        </Link>
        <Link className={classes.navLink} to="/about/">
          About
        </Link>
        <Link className={classes.navLink} to="/contact/">
          Contact
        </Link>
      </nav>
    </header>
  );
};

const classes = {
  title: "inline text-2xl font-semibold",
  navLink: "mr-6 text-green-700 underline",
};

export default Header;
