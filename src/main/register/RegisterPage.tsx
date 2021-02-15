import React, { useState } from "react";
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
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	InputGroup,
	Button,
	InputRightElement,
} from "@chakra-ui/react";
import Header from "shared-components/Header";
import InnerCenteredContainer from "shared-components/InnerCenteredContainer";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Example() {
	const [tabIndex, setTabIndex] = useState(0);
	const [show, setShow] = useState(false);

	// USER INPUT
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleShow = () => setShow(!show);
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
						minH="52em"
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
									Add Payment Details
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
								<Flex mt="16" justify="space-between">
									<FormControl id="first-name" isRequired maxW="23em">
										<FormLabel>First name</FormLabel>
										<Input
											placeholder="First name"
											size="lg"
											value={firstName}
											onChange={({ target }) => setFirstName(target.value)}
										/>
									</FormControl>
									<FormControl id="last-name" isRequired maxW="23em">
										<FormLabel>Last name</FormLabel>
										<Input
											placeholder="Last name"
											size="lg"
											value={lastName}
											onChange={({ target }) => setLastName(target.value)}
										/>
									</FormControl>
								</Flex>
								<Flex mt="8">
									<FormControl id="email" isRequired>
										<FormLabel>Email address</FormLabel>
										<Input
											type="email"
											placeholder="Email"
											value={email}
											onChange={({ target }) => setEmail(target.value)}
										/>
										<FormHelperText>We'll never share your email.</FormHelperText>
									</FormControl>
								</Flex>
								<Flex mt="16" justify="space-between">
									<FormControl id="username" isRequired maxW="23em">
										<FormLabel>Username</FormLabel>
										<Input
											placeholder="Username"
											size="lg"
											value={username}
											onChange={({ target }) => setUsername(target.value)}
										/>
									</FormControl>
									<FormControl id="password" isRequired maxW="23em">
										<FormLabel>Password</FormLabel>
										<InputGroup size="lg">
											<Input
												type={show ? "text" : "password"}
												value={password}
												onChange={({ target }) => setPassword(target.value)}
												placeholder="Password"
											/>
											<InputRightElement width="4.5rem">
												<Button h="1.75rem" size="sm" onClick={handleShow}>
													{show ? "Hide" : "Show"}
												</Button>
											</InputRightElement>
										</InputGroup>
									</FormControl>
								</Flex>
								<Flex mt="24" justifyContent="flex-end">
									<Button colorScheme="teal" size="lg" onClick={() => handlePanel(true)}>
										<ArrowForwardIcon mx="1" h="6" w="6" />
									</Button>
								</Flex>
							</TabPanel>
							<TabPanel>Are 1, 2, 3</TabPanel>
							<TabPanel>Red, yellow and blue.</TabPanel>
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
