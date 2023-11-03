import {Link} from "gatsby";
import * as React from "react";
import {
  container,
  heading,
  navLinkItem,
  navLinks,
  navLinkText,
  siteTitle
} from "./layout.module.css";
import useSiteMetaData from "../hooks/useSiteMetaData";

function Layout({children, pageTitle}) {
  /**
   * Custom hook to get site meta data from the gatsby-config.js file.
   */
  const data = useSiteMetaData();

  return (
    <div className={container}>
      <header>
        <h1 className={siteTitle}>{data?.title}</h1>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to={"/"} className={navLinkText}>Home</Link>
            </li>
            <li className={navLinkItem}>
              <Link to={"/about"} className={navLinkText}>About</Link>
            </li>
            <li className={navLinkItem}>
              <Link to={"/blog"} className={navLinkText}>Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2 className={heading}>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );


}

export default Layout;
