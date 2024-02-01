'use client';
import React, { useState } from 'react';
import navLinks from '../../_data/nav';
import SidebarLink from './SidebarLink';

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setMenuOpen((prevMenuOpen) => (prevMenuOpen === menuName ? null : menuName));
  };

  return (
    <aside className="sidebar">
      <div className="navigation">
        <ul className="sidebar__nav">
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
