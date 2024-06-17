import React from "react";
import "./sidebar.css";
import SidebarOptions from "./SidebarOptions";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
	const [{ playlists }, dispatch] = useDataLayerValue();
	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt="spotify-logo"
			/>
			<SidebarOptions title={"Home"} />
			<SidebarOptions title={"Search"} />
			<SidebarOptions title={"Your Library"} />
			<br />
			<strong className="sidebar__title">PLAYLIST</strong>
			<hr />

			{playlists.items?.map((playlist) => {
				const imageUrls = playlist.images.map((image) => image.url);

				return (
					<SidebarOptions
						banner={imageUrls}
						title={playlist.name}
						key={playlist.name}
					/>
				);
			})}
		</div>
	);
};

export default Sidebar;
