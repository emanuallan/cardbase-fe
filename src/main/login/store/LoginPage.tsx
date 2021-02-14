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
import { LockIcon } from "@chakra-ui/icons";
import InnerCenteredContainer from "shared-components/InnerCenteredContainer";
import { FaUserCircle, FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";
import Header from "shared-components/Header";

const isProduction = process.env.NODE_ENV === 'production' // production flag
const URI = isProduction ? 'https://cardbase.com' : 'http://localhost:8000'

function LoginPage() {
	return (
		<>
			<Header />
			<InnerCenteredContainer>
				<Center minH="100vh" h="full">
					<Flex borderRadius="3xl" boxShadow="2xl">
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
				</Center>
			</InnerCenteredContainer>
		</>
	);
}

function LoginForm() {
	const [show, setShow] = useState(false);
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const handleClick = () => setShow(!show);
    const clearInput = () => { setPassword(""); setUser("");}
    const redirect = (path: string) => { return }  // redirects to profile page.

    /**
     * handleLogIn attempts to authorize user with the provided credentials.
     */
    function handleLogIn(event) {
        event.preventDefault()
        const payload = {
            username: user,
            password: password,
        }

        fetch(`${URI}/account/login/`, { // end-slash is required.
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
          .then(res => res.json())
          .then(res => { 
              if (res.status >= 400) {
                  // handle errors.
                  return
              }
              // assign token to localstorage.
              console.log('Token:', res); 
              redirect('profile/'); 
          })
          .catch(err => console.log("error: ", err))

        clearInput();
    }

	return (
		<Box w="25em" margin="auto auto">
			<Stack spacing={6}>
				<InputGroup size="lg">
					<InputLeftElement
						pointerEvents="none"
						children={<Icon as={FaUserCircle} color="gray.300" fontSize="xl" />}
					/>
					<Input placeholder="Username" value={user} onChange={({ target }) => setUser(target.value)} />
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
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</Stack>
			<Flex justify="space-between" align="center" mt="24px">
				<Checkbox defaultIsChecked>Remember me</Checkbox>
				<Button colorScheme="teal" size="lg" onClick={handleLogIn}>
					Login
				</Button>
			</Flex>
			<Flex justify="space-between" mt="8px">
				<Link color="blue.500" href="#">
					Register Now
				</Link>
				<Link color="gray.500" href="#">
					Forgot Password?
				</Link>
			</Flex>
			<Box h="2px" bg="gray.300" my="48px" />
			<Stack spacing={6}>
				<Button size="lg" colorScheme="facebook" leftIcon={<FaFacebook />}>
					Login with Facebook
				</Button>
				<Button size="lg" colorScheme="twitter" leftIcon={<FaTwitter />}>
					Login with Twitter
				</Button>
				<Button size="lg" bg="#F24436" color="white" _hover={{ bg: "#C32E24" }} leftIcon={<FaGoogle />}>
					Login with Google
				</Button>
			</Stack>
		</Box>
	);
}

export default LoginPage;
