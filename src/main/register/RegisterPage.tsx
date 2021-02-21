import React, { useState, useEffect } from "react";
import { Tabs, Tab, TabList, TabPanel, TabPanels, Center, Heading, Flex, Text, Button } from "@chakra-ui/react";
import Header from "shared-components/Header";
import InnerCenteredContainer from "shared-components/InnerCenteredContainer";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import TeamSelector from "shared-components/TeamSelector";
import RegisterForm from "./components/RegisterForm";

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
		<>
			<Header />
			<InnerCenteredContainer>
				<Center minH="100vh" h="full">
					<Tabs
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
									Set Targets
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
									4
								</Text>
								<Text fontSize="xl" fontWeight="semibold">
									Start Trading
								</Text>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel px="15em">
								<Flex alignItems="center" flexDirection="column">
									<Heading color="black.500" as="h1" size="lg" mt="1.1em">
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
								<TeamSelector />
								<Flex mt="24" justifyContent="space-between">
									<Button colorScheme="teal" size="lg" onClick={() => handlePanel(false)}>
										<ArrowBackIcon mx="1" h="6" w="6" />
									</Button>
									<Button colorScheme="teal" size="lg" onClick={() => handlePanel(true)}>
										<ArrowForwardIcon mx="1" h="6" w="6" />
									</Button>
								</Flex>
							</TabPanel>
							<TabPanel>
								<Flex mt="24" justifyContent="space-between">
									<Button colorScheme="teal" size="lg" onClick={() => handlePanel(false)}>
										<ArrowBackIcon mx="1" h="6" w="6" />
									</Button>
									<Button colorScheme="teal" size="lg" onClick={() => handlePanel(true)}>
										<ArrowForwardIcon mx="1" h="6" w="6" />
									</Button>
								</Flex>
							</TabPanel>
							<TabPanel>
								<Flex mt="24" justifyContent="space-between">
									<Button colorScheme="teal" size="lg" onClick={() => handlePanel(false)}>
										<ArrowBackIcon mx="1" h="6" w="6" />
									</Button>
									<Button colorScheme="teal" size="lg" onClick={() => handlePanel(true)}>
										<ArrowForwardIcon mx="1" h="6" w="6" />
									</Button>
								</Flex>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Center>
			</InnerCenteredContainer>
		</>
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
