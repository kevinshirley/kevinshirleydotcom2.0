import React from 'react';
import Link from 'src/components/common/link';
import { TOP_DRAWER_MENU, BOTTOM_DRAWER_MENU } from 'src/components/material-ui/icons';

function FooterSection2() {
  return (
    <div className="footer-section-2">
      <div className="list">
        {TOP_DRAWER_MENU.map((obj, index) => (
          <Link href={obj.pathname} key={index}>{obj.label}</Link>
        ))}
      </div>
      <div className="list">
        {BOTTOM_DRAWER_MENU.map((obj, index) => (
          <Link href={obj.pathname} key={index}>{obj.label}</Link>
        ))}
      </div>
    </div>
  );
};

export default FooterSection2;