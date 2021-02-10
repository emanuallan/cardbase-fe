import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";

function InnerCenteredContainer({ children }) {
	const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");

	return (
		<Box maxW={"80em"} margin={"0 auto"}>
			{children}
		</Box>
	);
}

export default InnerCenteredContainer;
