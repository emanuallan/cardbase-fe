import React from "react";
import { Text, Code, Center, Box, Flex, Image, Heading } from "@chakra-ui/react";
import InnerCenteredContainer from "shared-components/InnerCenteredContainer";

function LoginPage() {
	return (
		<InnerCenteredContainer>
			<Center minH="100vh" h="full">
				<Flex borderRadius="3xl" boxShadow="2xl" minH="50em">
					<Box p="6">
						<Heading as="h1" size="2xl" mb="2">
							Login
						</Heading>
					</Box>

					<Image
						w="full"
						h="50em"
						fit="cover"
						src="https://images.unsplash.com/photo-1607310073276-9f48dec47340?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
						alt="Segun Adebayo"
					/>
				</Flex>
			</Center>
		</InnerCenteredContainer>
	);
}

export default LoginPage;
