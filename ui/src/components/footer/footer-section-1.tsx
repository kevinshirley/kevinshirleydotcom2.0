import React from 'react';
import { FOOTER_SOCIAL_ICON } from 'ui/src/components/material-ui/icons';

function FooterSection1() {
  return (
    <div className="footer-section-1">
      <div className="container">
        <span className="label">Stay Connected</span>
        <div className="icons">
          {FOOTER_SOCIAL_ICON.map(icon => (
            <a href={icon.url}>{icon.icon}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSection1;