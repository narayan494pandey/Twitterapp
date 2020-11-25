import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListIcon from '@material-ui/icons/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoreIcon from '@material-ui/icons/More';
function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />
            <SidebarOption text="Home" Icon={HomeIcon} />
            <SidebarOption text="Explore" Icon={ SearchIcon} />
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
            <SidebarOption text="Messages" Icon={MessageIcon} />
            <SidebarOption text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarOption text="Lists" Icon={ListIcon} />
            <SidebarOption text="Profile" Icon={AccountBoxIcon} />
            <SidebarOption text="More" Icon={MoreIcon} />
        
        </div>
    )
}

export default Sidebar
