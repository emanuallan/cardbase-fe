import React from "react";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

function InnerCenteredContainer({ children }) {
	const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");

	return (
		<Flex w="full" justifyContent="center">
			<Box maxW={"80em"}>{children}</Box>
		</Flex>
	);
}

export default InnerCenteredContainer;
