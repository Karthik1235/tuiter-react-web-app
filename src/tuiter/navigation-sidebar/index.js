import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item" href="#">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill pe-1"></i>
                Home
            </Link>
            <Link to="/tuiter/explore1" className={`list-group-item ${active === 'explore1'?'active':''}`}>
                <i className="bi bi-hash pe-1"></i>
                Explore
            </Link>
            <a href="#" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill pe-1"></i>
                Notifications
            </a>
            <a href="#" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill pe-1"></i>
                Messages
            </a>
            <a  href="#" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill pe-1"></i>
                Bookmarks
            </a>
            <a href="#" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list pe-1"></i>
                Lists
            </a>
            <a  href="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill pe-1"></i>
                Profile
            </a>
            <a href="#" className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots pe-1"></i>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;