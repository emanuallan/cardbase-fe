import React, { useState } from "react";
import { Image, Flex, InputGroup, InputLeftElement, Icon, Input, Box, SimpleGrid } from "@chakra-ui/react";
import logo1 from "/logo1.png";
import logo2 from "/logo2.png";
import { SearchIcon } from "@chakra-ui/icons";

function Header() {
	const [search, setSearch] = useState("");

	return (
		<SimpleGrid columns={3} spacing={2} w="full" borderTop="8px" borderTopColor="teal.500" pb="4" boxShadow="sm">
			<Box>
				{" "}
				<Image src={"/logo1.png"} alt="Card Base" h="50px" w="auto" mt="4" ml="2" />
			</Box>
			<Flex alignItems="center" justify="center" mt="4">
				<InputGroup size="lg" maxW="23em">
					<InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
					<Input
						placeholder="Search the base"
						value={search}
						onChange={({ target }) => setSearch(target.value)}
					/>
				</InputGroup>
			</Flex>
			<Box></Box>
		</SimpleGrid>
	);
}

export default Header;
