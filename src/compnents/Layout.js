import {Link} from "gatsby";
import * as React from "react";
import {container, heading, navLinks, navLinkText, navLinkItem} from "./layout.module.css";

function Layout({children, pageTitle}) {
  return (
    <div className={container}>
      <header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to={"/"} className={navLinkText}>Home</Link>
            </li>
            <li className={navLinkItem}>
              <Link to={"/about"} className={navLinkText} >About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );


}

export default Layout;
