import './Siderbar.css';
import { MdFavorite } from 'react-icons/md';
import { IoSettings } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSolidLogOut } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-logo">Memories</div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-list">
          <BsFillPersonFill className="sidebar-menu-list-icon" />
          <p className="sidebar-menu-list-text">Profile</p>
        </div>
        <div className="sidebar-menu-list">
          <MdFavorite className="sidebar-menu-list-icon" />
          <p className="sidebar-menu-list-text">Favorites</p>
        </div>
        <div className="sidebar-menu-list">
          <IoSettings className="sidebar-menu-list-icon" />
          <p className="sidebar-menu-list-text">Settings</p>
        </div>
      </div>
      <div className="sidebar-footer">
        <BiSolidLogOut className="sidebar-footer-icon" />
        <p className="sidebar-footer-text">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;