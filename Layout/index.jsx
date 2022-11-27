import { Box, Container } from "@mui/material";
import React from "react";
import CommonStyles from "../components/CommonStyles/index.js";
import MenuHeader from "../components/MenuHeader/index.jsx";
import styles from "./Layout.module.scss";
import { ShoppingCart } from "@mui/icons-material";
import FastLogo from "components/FastLogo/index.jsx";

const Layout = ({ children }) => {
	return (
		<>
			<Box className={styles.header}>
				<Container maxWidth="lg">
					<MenuHeader />
				</Container>
				<FastLogo
					height={50}
					width={115}
				/>
			</Box>
			{children}
		</>
	);
};

export default Layout;
