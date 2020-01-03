import React from 'react';
import Link from 'ui/src/components/common/link';
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
              <img src={logo} alt="Kevin Shirley | Software Developer"/>
            </Link>
          </div>
          <ul className="links">
            <li className="link"><a href="tel:+15144334978">{IPHONE_ICON}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;