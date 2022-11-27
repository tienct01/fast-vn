import { Badge, IconButton, styled } from "@mui/material";
import React from "react";

const CustomBadge = styled(Badge)({
	"& .MuiBadge-badge": {
		backgroundColor: "#fff",
		color: "#000",
	},
});
const BadgeButton = ({ badgeCount, icon, styles }) => {
	return (
		<IconButton>
			<CustomBadge
				badgeContent={badgeCount}
				sx={styles}
				color="primary"
			>
				{icon}
			</CustomBadge>
		</IconButton>
	);
};

export default BadgeButton;
