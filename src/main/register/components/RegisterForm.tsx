import React, { useState } from "react";
import {
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	InputGroup,
	Button,
	InputRightElement,
} from "@chakra-ui/react";

function RegisterForm() {
	// USER INPUT
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [show, setShow] = useState(false);
	const handleShow = () => setShow(!show);

	return (
		<>
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
		</>
	);
}

export default RegisterForm;
