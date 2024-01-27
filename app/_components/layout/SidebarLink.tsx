// components/SidebarLink.tsx
import React from 'react';
import Link from 'next/link';

const SidebarLink: React.FC<{ link: Links }> = ({ link }) => (
  <li className="nav__group show">
    <Link href={link.href} className="nav__link">
      {link.name}
    </Link>
    <ul className="nav__group-items">
      <li className="nav__item"></li>
      {link.children && (
        <li className="nav__item">
          {link.children.map((child: Links) => (
            <Link key={child.name} href={child.href} className="nav__link">
              {child.name}
            </Link>
          ))}
        </li>
      )}
    </ul>
  </li>
);

export default SidebarLink;
