import React from "react";
import { Box } from "@mui/material";
import styles from "./Menu.module.scss";
import { Notifications, Discount, Login, Logout } from "@mui/icons-material";

const MenuHeader = () => {
	const menuItem = [
		{
			icon: Discount,
			text: "Chính sách ưu đãi",
		},
		{
			icon: Notifications,
			text: "Thông báo",
		},
		{
			icon: Login,
			text: "ĐĂNG NHẬP",
		},
		{
			icon: Logout,
			text: "ĐĂNG XUẤT",
		},
	];
	return (
		<Box className={styles.menu}>
			{menuItem.map((item, id) => {
				return (
					<Box
						key={id}
						className={styles.menuItem}
					>
						<item.icon className={styles.menuItemIcon} />
						{item.text}
					</Box>
				);
			})}
		</Box>
	);
};

export default MenuHeader;
