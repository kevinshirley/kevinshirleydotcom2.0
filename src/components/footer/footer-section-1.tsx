import React from 'react';
import { FOOTER_SOCIAL_ICON } from 'src/components/material-ui/icons';

function FooterSection1() {
  return (
    <div className="footer-section-1">
      <div className="container">
        <span className="label">Stay Connected</span>
        <div className="icons">
          {FOOTER_SOCIAL_ICON.map((icon, index) => (
            <a href={icon.url} key={index} target="_blank">{icon.icon}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSection1;