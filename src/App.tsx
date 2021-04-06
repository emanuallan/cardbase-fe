import * as React from "react";

import { ColorModeSwitcher } from "./shared-components/ColorModeSwitcher";
import { Route, Switch } from "react-router-dom";
import LoginPage from "main/login/store/LoginPage";
import RegisterPage from "main/register/RegisterPage";

export const App = () => (
	<main>
		<Switch>
			<Route path="/login" component={LoginPage} />
			<Route path="/register" component={RegisterPage} />
		</Switch>
	</main>
);

//import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from "@chakra-ui/react";
//import { ColorModeSwitcher } from "./ColorModeSwitcher";
//import { Logo } from "./Logo";
// export const App = () => (
// 	<ChakraProvider theme={theme}>
// 		<Box textAlign="center" fontSize="xl">
// 			<Grid minH="100vh" p={3}>
// 				<ColorModeSwitcher justifySelf="flex-end" />
// 				<VStack spacing={8}>
// 					<Logo h="40vmin" pointerEvents="none" />
// 					<Text>
// 						Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
// 					</Text>
// 					<Link
// 						color="teal.500"
// 						href="https://chakra-ui.com"
// 						fontSize="2xl"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						Learn Chakra
// 					</Link>
// 				</VStack>
// 			</Grid>
// 		</Box>
// 	</ChakraProvider>
// );
