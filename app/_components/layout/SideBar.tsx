'use client';
import React, { useState } from 'react';

import classNames from '@utils/classNames';

import SidebarLink from './SidebarLink';
import navLinks from '../../_data/nav';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setMenuOpen((prevMenuOpen) => (prevMenuOpen === menuName ? null : menuName));
  };

  return (
    <aside className={classNames('sidebar')}>
      <div className={classNames('navigation')}>
        <ul className={classNames('sidebar__nav')}>
          {navLinks.map((link) => (
            <SidebarLink
              key={link.name}
              link={link}
              menuOpen={menuOpen === link.name}
              onMenuClick={() => toggleMenu(link.name)}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
