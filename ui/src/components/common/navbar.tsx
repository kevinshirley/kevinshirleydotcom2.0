import React from 'react';
import Link from 'next/Link';

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
      {/* {/* <li><Link href="/about"><a>About</a></Link></li> */}
    </ul>
  </div>
);

export default Navbar;