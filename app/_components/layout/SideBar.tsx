import navLinks from '../../_data/nav';
import SidebarLink from './SidebarLink';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="navigation">
        <ul className="sidebar__nav">
          {navLinks.map((link) => (
            <SidebarLink key={link.name} link={link} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
