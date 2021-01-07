import { Link } from "gatsby";
import React from "react";

type HeaderProps = {
  siteMetadata: any;
};

const Header: React.FC<HeaderProps> = ({ siteMetadata }) => {
  return (
    <header className="mb-12">
      <nav className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold inline-block">
          {siteMetadata.title}
        </h3>
        <ul className="flex">
          <li className="inline-block px-5 py-4">
            <Link className={classes.navLink} to="/">
              Home
            </Link>
          </li>
          <li className="inline-block px-5 py-4">
            <Link className={classes.navLink} to="/about/">
              About
            </Link>
          </li>
          <li className="inline-block px-5 py-4">
            <Link className={classes.navLink} to="/contact/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const classes = {
  title: "inline text-2xl font-semibold",
  navLink: "text-green-700 underline",
};

export default Header;
