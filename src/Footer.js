import React from "react";
import "./footer.css";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosShuffle } from "react-icons/io";
import { LuRepeat } from "react-icons/lu";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { useDataLayerValue } from "./DataLayer";

const Footer = () => {
	const [{ playlists }, dispatch] = useDataLayerValue();
	console.log(playlists);
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					src="https://i.scdn.co/image/ab67616d00004851dbb3dd82da45b7d7f31b1b42"
					alt=""
					className="footer__albumLogo"
				/>
				<div className="footer__songInfo">
					<h4>The Real Slim Shady</h4>
					<p>Eminem</p>
				</div>
			</div>
			<div className="footer__center">
				<IoIosShuffle className="footer__green" />
				<MdSkipPrevious className="footer__icon" />
				<FaRegCirclePlay fontSize="large" className="footer__icon" />
				<MdSkipNext className="footer__icon" />
				<LuRepeat className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
