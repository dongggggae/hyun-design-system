'use client';
import React, { useState } from 'react';
import classNames from '@utils/classNames';
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

  const handleActiveLink = (linkName: string) => setActiveLink(linkName);

  const handleGroupClick = (event: React.MouseEvent) => {
    setActiveLink(null);
    onMenuClick(event);
  };

  return (
    <React.Fragment>
      <li className={classNames('nav__group', pathname === link.href ? 'active' : '', menuOpen ? 'show' : '')}>
        <div className={classNames('menu')}>
          <button className={classNames('menu-toggle__button')} onClick={onMenuClick} />
          <Link href={link.href} className={classNames('nav__link')} onClick={handleGroupClick}>
            {link.name}
          </Link>
        </div>

        {link.children && (
          <ul className={classNames('nav__group-items')}>
            <li className={classNames('nav__item')}>
              {link.children.map((child: Links) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className={classNames('nav__link', pathname === child.href ? 'active' : '')}
                  onClick={() => handleActiveLink(child.name)}
                >
                  {child.name}
                </Link>
              ))}
            </li>
          </ul>
        )}
      </li>
    </React.Fragment>
  );
};

export default SidebarLink;
