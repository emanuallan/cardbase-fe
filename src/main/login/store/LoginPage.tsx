import React, { useState } from "react";
import {
	Center,
	Box,
	Flex,
	Image,
	Heading,
	Input,
	InputGroup,
	Button,
	InputRightElement,
	InputLeftElement,
	Icon,
	Stack,
	Checkbox,
	Link,
	Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { LockIcon } from "@chakra-ui/icons";
import InnerCenteredContainer from "shared-components/InnerCenteredContainer";
import { FaUserCircle, FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";
import Header from "shared-components/Header";
import UserPool from "UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Cookies from "js-cookie";

function LoginPage() {
	return (
		<Flex minH="100vh" h="full" flexDir="column" w="full">
			<Header />
			<Box flex="1" d="flex" flexDir="column" justifyContent="center" alignItems="center" w="full">
				<Flex borderRadius="3xl" boxShadow="2xl" maxW="80em">
					<Flex p="6" w="53%" justify="center" alignItems="center" flexDir="column">
						<Heading color="gray.500" as="h1" size="lg" mt="1em">
							Login
						</Heading>
						<LoginForm />
						<Text color="gray.300">
							© 2021 CardBase Inc. • For Traders • About Us • Privacy Policy • Terms of Service
						</Text>
					</Flex>
					<Box w="47%">
						<Image
							borderTopRightRadius="3xl"
							borderBottomRightRadius="2xl"
							h="50em"
							w="full"
							fit="cover"
							src="https://images.unsplash.com/photo-1607310073276-9f48dec47340?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
							alt="Sport Cards"
						/>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
}

function LoginForm() {
	const history = useHistory();
	const [show, setShow] = useState(false);

	// USER INPUT
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleFacebookLogin = () => {
		window.location.href = `https://cardbasedev.auth.us-east-2.amazoncognito.com/oauth2/authorize?redirect_uri=${encodeURI(
			"http://localhost:3000/"
		)}&response_type=token&client_id=352ksv0tbbdm2g7tlqv57adpj1&identity_provider=Facebook`;
	};

	const handleNativeLogin = () => {
		const user = new CognitoUser({
			Username: username,
			Pool: UserPool,
		});

		const authDetails = new AuthenticationDetails({
			Username: username,
			Password: password,
		});

		user.authenticateUser(authDetails, {
			onSuccess: (data) => {
				Cookies.set("accessToken", data.getAccessToken().getJwtToken());
				Cookies.set("refreshToken", data.getRefreshToken().getToken());
				console.log("onSuccess", data);
			},
			onFailure: (err) => {
				console.error("onFailure", err);
				console.log(Cookies.get());
			},
			newPasswordRequired: (data) => {
				console.log("NPR", data);
			},
		});
	};

	const handleShow = () => setShow(!show);

	return (
		<Box w="25em" margin="auto auto">
			<Stack spacing={6}>
				<InputGroup size="lg">
					<InputLeftElement
						pointerEvents="none"
						children={<Icon as={FaUserCircle} color="gray.300" fontSize="xl" />}
					/>
					<Input
						placeholder="Username"
						value={username}
						onChange={({ target }) => setUsername(target.value)}
					/>
				</InputGroup>
				<InputGroup size="lg">
					<InputLeftElement pointerEvents="none" children={<LockIcon color="gray.300" />} />
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
			</Stack>
			<Flex justify="space-between" align="center" mt="24px">
				<Checkbox defaultIsChecked>Remember me</Checkbox>
				<Button colorScheme="teal" size="lg" onClick={handleNativeLogin}>
					Login
				</Button>
			</Flex>
			<Flex justify="space-between" mt="8px">
				<Link color="blue.500" onClick={() => history.push("/register")}>
					Register Now
				</Link>
				<Link color="gray.500">Forgot Password?</Link>
			</Flex>
			<Box h="2px" bg="gray.300" my="48px" />
			<Stack spacing={6}>
				<Button size="lg" colorScheme="facebook" leftIcon={<FaFacebook />} onClick={handleFacebookLogin}>
					Continue with Facebook
				</Button>
				<Button size="lg" colorScheme="twitter" leftIcon={<FaTwitter />}>
					Continue with Twitter
				</Button>
				<Button size="lg" bg="#F24436" color="white" _hover={{ bg: "#C32E24" }} leftIcon={<FaGoogle />}>
					Continue with Google
				</Button>
			</Stack>
		</Box>
	);
}

export default LoginPage;
