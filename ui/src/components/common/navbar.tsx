import React from 'react';
import Link from 'next/Link';
import logo from 'ui/src/assets/images/kevinshirley.png';
import MaterialDrawer from 'ui/src/components/material-ui/drawer';
import { IPHONE_ICON } from 'ui/src/components/material-ui/icons';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="top-navbar"></div>
      <div className="navbar">
        <div className="wrapper">
          <div className="menu-icon">
            <MaterialDrawer />
          </div>
          <div className="logo">
            <Link href="/">
              <a><img src={logo} alt="Kevin Shirley | Software Developer"/></a>
            </Link>
          </div>
          <ul className="links">
            <li className="link"><Link href="portfolio"><a>{IPHONE_ICON}</a></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;