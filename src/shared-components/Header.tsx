import React, { useState } from "react";
import { Image, Flex, InputGroup, InputLeftElement, Icon, Input, Box, SimpleGrid, Button } from "@chakra-ui/react";
import logo1 from "/logo1.png";
import logo2 from "/logo2.png";
import { SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart, FaHandsHelping } from "react-icons/fa";

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
			<Flex justify="flex-end" alignItems="center" mt="4" mr="8">
				<Icon as={FaShoppingCart} color="gray.500" w="auto" h="1.8rem" mr="8" />
				<Button
					size="lg"
					bg="yellow.300"
					onClick={() => console.log("hi")}
					leftIcon={<Icon as={FaHandsHelping} color="gray.500" w="auto" h="1.8rem" />}
				>
					Trade
				</Button>
			</Flex>
		</SimpleGrid>
	);
}

export default Header;
