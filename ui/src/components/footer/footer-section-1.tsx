import React from 'react';
import { FOOTER_SOCIAL_ICON } from 'ui/src/components/material-ui/icons';

function FooterSection1() {
  return (
    <div className="footer-section-1">
      <span>Stay Connected</span>
      <div className="container">
        {FOOTER_SOCIAL_ICON.map(icon => (
          <a href={icon.url}>{icon.icon}</a>
        ))}
      </div>
    </div>
  );
};

export default FooterSection1;