import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaTimes,
    FaUserAlt,
    FaSearch,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./SideBar.css";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        { path: "/", name: "Dashboard", icon: <FaTh /> },
        { path: "/dashboard", name: "Profile", icon: <FaUserAlt /> },
        { path: "/view-business-card", name: "Search", icon: <FaSearch /> },
        { path: "/create-business-card", name: "Create Card", icon: <FaShoppingBag /> },
        { path: "/about", name: "About", icon: <FaThList /> },
        { path: "/contact", name: "Contact", icon: <FaThList /> }

    ];

    return (
        <div className="containersidebar">
            <div style={{ width: isOpen ? "200px" : "50px",zIndex:100,backgroundColor:'white' }} className="sidebar">
                <div className="top_section">
                    {/* <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"></h1> */}
                    <div style={{ marginLeft: isOpen ? "120px" : "0px", display: "flex" }} className="bars">
                        {/* Conditionally render FaBars or FaTimes based on isOpen */}
                        {isOpen ? <FaTimes onClick={toggle} /> : <FaBars onClick={toggle} />}
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) => isActive ? "link active" : "link"} 
                        >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
