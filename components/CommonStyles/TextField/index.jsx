import { Input, InputAdornment, styled } from "@mui/material";
import React from "react";

const CustomInput = styled(Input)({});
const TextField = ({ type, icon, formikProps, placeholder }) => {
	const { handleChange, handleBlur, value } = formikProps;
	return (
		<>
			<CustomInput
				type={type}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder={placeholder}
			/>
		</>
	);
};

export default TextField;
