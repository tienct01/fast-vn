import { Box } from "@mui/material";
import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
	return (
		<>
			<Box className={styles.header}></Box>
			{children}
		</>
	);
};

export default Layout;
