import React from 'react';
import Link from 'next/link';

function NextLink(props: any) {
  const { children, href } = props;
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default NextLink;