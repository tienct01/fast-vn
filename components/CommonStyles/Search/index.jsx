import React from "react";
import { Box, ButtonBase, InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { styled } from "@mui/system";

const SearchField = styled(TextField)(({ theme }) => ({
	backgroundColor: "#fff",
	border: "none",
	borderRadius: "8px",
	outline: "0",
	"& .MuiInputBase-root": {
		padding: "0px",
	},
	"& 	.MuiOutlinedInput-notchedOutline": {
		border: "none",
		display: "none",
	},
	"& .MuiOutlinedInput-input": {
		padding: "0px",
		height: "40px",
	},
	"& .MuiButtonBase-root": {
		padding: "0px 10px",
		"&:hover": {
			background: "none",
		},
	},
}));
const Search = ({ handleSearch, placeholder }) => {
	return (
		<Box>
			<SearchField
				InputProps={{
					startAdornment: (
						<InputAdornment
							component={ButtonBase}
							position="start"
							disableRipple={true}
						>
							<SearchIcon />
						</InputAdornment>
					),
				}}
				placeholder={placeholder}
				onChange={handleSearch}
			/>
		</Box>
	);
};

export default Search;
