import React from 'react';

function FooterSection3() {
  const today = new Date(), year = today.getFullYear();

  return (
    <div className="footer-section-3">
      <small>© {year} Kevin Shirley, All rights reserved.</small>
    </div>
  );
};

export default FooterSection3;