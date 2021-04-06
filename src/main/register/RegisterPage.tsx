import React, { useState, useEffect } from "react";
import {
	Tabs,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Center,
	Heading,
	Flex,
	Text,
	Button,
	Box,
	Image,
} from "@chakra-ui/react";
import Header from "shared-components/Header";
import InnerCenteredContainer from "shared-components/InnerCenteredContainer";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import TeamSelector from "shared-components/TeamSelector";
import RegisterForm from "./components/RegisterForm";
import TeamsAccordian from "shared-components/TeamsAccordian";

export default function Example() {
	const [tabIndex, setTabIndex] = useState(0);

	const handlePanel = (bool) => {
		if (bool) {
			setTabIndex(tabIndex + 1);
		} else {
			setTabIndex(tabIndex - 1);
		}
	};

	return (
		<Flex minH="100vh" h="full" flexDir="column" w="full">
			<Header />
			<Box flex="1" d="flex" flexDir="column" justifyContent="center" alignItems="center" w="full">
				<Tabs
					maxW="80em"
					isLazy
					minH="60em"
					boxShadow="2xl"
					borderRadius="3xl"
					isFitted
					w="full"
					index={tabIndex}
					onChange={(index) => setTabIndex(index)}
					colorScheme="teal"
				>
					<TabList mx="6">
						<Tab p="6">
							<Text
								bg="gray.200"
								color="gray.600"
								rounded="full"
								w="8"
								fontWeight="bold"
								fontSize="xl"
								mr="4"
							>
								1
							</Text>
							<Text fontSize="xl" fontWeight="semibold">
								Create Profile
							</Text>
						</Tab>
						<Tab p="6">
							<Text
								bg="gray.200"
								color="gray.600"
								rounded="full"
								w="8"
								fontWeight="bold"
								fontSize="xl"
								mr="4"
							>
								2
							</Text>
							<Text fontSize="xl" fontWeight="semibold">
								Set Fandom
							</Text>
						</Tab>
						<Tab p="6">
							<Text
								bg="gray.200"
								color="gray.600"
								rounded="full"
								w="8"
								fontWeight="bold"
								fontSize="xl"
								mr="4"
							>
								3
							</Text>
							<Text fontSize="xl" fontWeight="semibold">
								Start Trading
							</Text>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel px="15em">
							<Flex alignItems="center" flexDirection="column" mb="16">
								<Heading color="black.500" as="h1" size="lg" mt="1em">
									Welcome to the Big Leagues
								</Heading>
								<Heading color="gray.300" as="h4" size="md" mt="1em">
									Start by creating your account
								</Heading>
							</Flex>
							<RegisterForm />
							<Flex mt="24" justifyContent="flex-end">
								<Button colorScheme="teal" size="lg" onClick={() => handlePanel(true)}>
									<ArrowForwardIcon mx="1" h="6" w="6" />
								</Button>
							</Flex>
						</TabPanel>
						<TabPanel>
							<Flex alignItems="center" flexDirection="column" mb="16">
								<Heading color="black.500" as="h1" size="lg" mt="1em">
									Select Your Trade Targets
								</Heading>
								<Heading color="gray.300" as="h4" size="md" mt="1em">
									What's missing in your collection?
								</Heading>
							</Flex>
							<TeamsAccordian />
							<Flex mt="24" mb="16" justifyContent="space-between" px="5em">
								<Button colorScheme="teal" size="lg" onClick={() => handlePanel(false)}>
									<ArrowBackIcon mx="1" h="6" w="6" />
								</Button>
								<Button colorScheme="teal" size="lg" onClick={() => handlePanel(true)}>
									<ArrowForwardIcon mx="1" h="6" w="6" />
								</Button>
							</Flex>
						</TabPanel>
						<TabPanel p="0">
							<Flex flexDir="row-reverse">
								<Box w="53%" position="relative">
									<Flex justify="center" alignItems="center" flexDir="column" h="full" pb="15em">
										<Heading color="black.500" as="h1" size="lg" mt="1em">
											Alright, Now For The Fun Part
										</Heading>
										<Heading color="teal.500" as="h4" size="md" mt="1em">
											Let's Get Trading
										</Heading>

										<Button size="lg" width="5em" colorScheme="teal" mt="4em">
											Go
										</Button>
									</Flex>
									<Box width="32.5em" bottom="0" left="0" position="absolute" mb="16" mx="5em">
										<Box textAlign="center">
											<Text color="gray.300" mb="20">
												Don't forget to verify your account to unlock all the features!
											</Text>
										</Box>

										<Button size="md" onClick={() => handlePanel(false)}>
											<ArrowBackIcon mx="1" h="6" w="6" />
										</Button>
									</Box>
								</Box>

								<Box w="47%">
									<Image
										maxH="60em"
										borderBottomLeftRadius="2xl"
										h="full"
										w="auto"
										fit="cover"
										src="https://images.unsplash.com/photo-1600196025037-fa07d787bd54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
										alt="Sport Cards"
									/>
								</Box>
							</Flex>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Flex>
	);
}

// USER TYPE
// export interface User {
// 	id: string;
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	username: string;
// 	thumbnail?: string;
// 	rating: float | null;
// 	bio?: string;
// 	wishlist: Card[];
// 	favAthletes?: Athlete[];
// 	favTeams?: Team[];
// 	favSports?: Sport[];
// }
//
