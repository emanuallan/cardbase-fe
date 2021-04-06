import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
	Flex,
	Image,
	CheckboxGroup,
	Stack,
	Checkbox,
	HStack,
} from "@chakra-ui/react";
import React, { useState, useEffect, FC } from "react";
import { NFL_HIERARCHY } from "api/NFLHIERARCHY";
import { PATRIOTS_ROSTER } from "api/PATRIOTS_ROSTER";

function TeamsAccordian() {
	return (
		<Box d="flex" flexDirection="column" alignItems="center">
			<HStack mb="16">
				{NFL_HIERARCHY.conferences[0].divisions.map((division) => (
					<DivisionGroup key={division.id} division={division.name} divisionTeams={division.teams} />
				))}
			</HStack>

			<HStack>
				{NFL_HIERARCHY.conferences[1].divisions.map((division) => (
					<DivisionGroup key={division.id} division={division.name} divisionTeams={division.teams} />
				))}
			</HStack>
		</Box>
	);
}

interface TeamItemProps {
	image: string;
	name: string;
	primaryColor?: string;
	secondaryColor?: string;
	roster: any[]; //eventually Athlete[]
}
const TeamItem: FC<TeamItemProps> = ({ image, name, roster, primaryColor = "black", secondaryColor = "white" }) => {
	const [selected, setSelected] = useState([] as any);

	return (
		<AccordionItem>
			<h2>
				<AccordionButton
					bg={selected.length > 0 ? primaryColor : "white"}
					color={selected.length > 0 ? "white" : "black"}
					borderRadius="lg"
					width="16.1em"
				>
					<Box d="flex" flex="1" textAlign="left" alignItems="center">
						<Image src={image} w="auto" h="35px" />{" "}
						<Text ml="2" fontWeight={selected.length > 0 ? "bold" : "medium"}>
							{name}
						</Text>
						{selected.length > 0 && (
							<Text ml="3" fontWeight="bold" fontSize="1.1rem">
								{selected.length}
							</Text>
						)}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={4} maxH={"12em"} overflowY="scroll">
				<Stack ml="8" mb="2">
					<Checkbox
						isChecked={selected.length === roster.length}
						value={"SA"}
						onChange={({ target }) => {
							if (target.checked) {
								setSelected(roster.map((player) => player.id));
							} else {
								setSelected([]);
							}
						}}
					>
						<Text fontWeight="medium">Select All</Text>
					</Checkbox>
				</Stack>
				<CheckboxGroup colorScheme="teal" onChange={(s) => setSelected(s)} value={selected}>
					<Stack ml="8">
						{roster?.map((player) => (
							<Checkbox value={player.id} key={player.id}>
								<Text fontWeight="medium">{`${player.first_name} ${player.last_name}`}</Text>
							</Checkbox>
						))}
					</Stack>
				</CheckboxGroup>
			</AccordionPanel>
		</AccordionItem>
	);
};

interface DivisionGroupProps {
	divisionTeams: any[]; //eventually Team object
	division: string;
}
const DivisionGroup: FC<DivisionGroupProps> = ({ divisionTeams, division }) => {
	return (
		<div>
			<Text fontWeight="bold" color="gray.400" mb="3">
				{division}
			</Text>
			<Accordion allowToggle maxW="max-content" borderColor="rgb(0,0,0,0)">
				{divisionTeams?.map((team) => (
					<TeamItem
						key={team.id}
						image="https://assets-sports.thescore.com/football/team/14/logo.png"
						name={`${team.market} ${team.name}`}
						primaryColor={team?.team_colors?.[1]?.hex_color}
						secondaryColor={team?.team_colors?.[0]?.hex_color}
						roster={PATRIOTS_ROSTER.players}
					/>
				))}
			</Accordion>
		</div>
	);
};

export default TeamsAccordian;
