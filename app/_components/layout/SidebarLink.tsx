'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  link: Links;
  menuOpen: boolean;
  onMenuClick: (event: React.MouseEvent) => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ link, menuOpen, onMenuClick }) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pathname = usePathname();

  const handleActiveLink = (linkName: string) => {
    setActiveLink(linkName);
  };

  const handleGroupClick = (event: React.MouseEvent) => {
    setActiveLink(null);
    onMenuClick(event);
  };

  const classes = ['nav__group', pathname === link.href ? 'active' : '', menuOpen ? 'show' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <li className={classes}>
      <div className="menu">
        <button className="menu-toggle__button" onClick={onMenuClick}></button>
        <Link href={link.href} className={`nav__link`} onClick={handleGroupClick}>
          {link.name}
        </Link>
      </div>

      <ul className="nav__group-items">
        <li className="nav__item"></li>
        {link.children && (
          <li className="nav__item">
            {link.children.map((child: Links) => (
              <Link
                key={child.name}
                href={child.href}
                className={`nav__link ${pathname === child.href ? 'active' : ''}`}
                onClick={() => handleActiveLink(child.name)}
              >
                {child.name}
              </Link>
            ))}
          </li>
        )}
      </ul>
    </li>
  );
};

export default SidebarLink;
