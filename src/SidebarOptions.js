import React from "react";
import "./sidebarOption.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";

const SidebarOptions = ({ banner, title }) => {
	console.log("The Banner", banner);
	const renderIcon = () => {
		switch (title) {
			case "Home":
				return <FaHome className="sidebarOption__icon" />;
			case "Search":
				return <FaSearch className="sidebarOption__icon" />;
			case "Your Library":
				return <MdLibraryMusic className="sidebarOption__icon" />;
			default:
				return null;
		}
	};

	return (
		<div className="sidebarOption">
			{renderIcon()}
			{title && banner ? (
				<div className="banner__image">
					<div>
						<img src={banner[0]} alt="banner" height="35px" />
					</div>
					<h4>{title}</h4>
				</div>
			) : (
				<p>{title}</p>
			)}
		</div>
	);
};

export default SidebarOptions;
