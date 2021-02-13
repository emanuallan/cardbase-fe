export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	thumbnail?: string;
	rating: float | null;
	bio?: string;
	wishlist: Card[];
	favAthletes?: Athlete[];
	favTeams?: Team[];
	favSports?: Sport[];
}

export interface CardStore {
	id: string;
	name: string;
	email: string;
	foundationDate: string;
	username: string;
	rating: float | null;
	thumbnail?: string;
	bio?: string;
}

export interface SportCard extends Card {
	id: string;
	organization: League;
	publisher: string;
	cardNumber: number; //card number from respective collection
	serialNumber?: number; // e.g. if 6/250 -> serialNumber: 6
	condition: string;
	name: string;
	printRun?: string; //numbered, unumbered 1, 2-30, 31-100, 100+
	team?: Team;
	athlete?: Athlete;
	league?: League;
	sport?: Sport;
	grade?: Grade;
	year?: number;
	collectionName?: string;
	autograph?: Autograph;
	printingPlate?: string;
	isRookie?: boolean;
	isPatchCard?: boolean;
	isJerseyCard?: boolean; //yellow magenta cyan black 1/1 for ea color
	isInsert?: boolean;
}

export interface Grade {
	grade: float;
	gradingCompany: string;
	condition: string;
	cardGradeId: string;
	subGrades?: {
		centering: float;
		corners: float;
		edges: float;
		surface: float;
	};
}

export interface Autograph {
	isAutographed: boolean;
	isAutographedAuthenticated: boolean;
	autographAuthenticatedBy: string;
	surface: string; // hard-signed or sticker-signed or cut-signed http://www.upperdeck.com/Collectors-Zone/trading-cards-explained.aspx
}

//https://www.espn.com/apis/devcenter/docs/teams.html#sports-object
export interface Sport {
	id: string;
	espnId: number; //espn stores as number
	name: string;
	leagues: League[];
	superstars: Athlete[];
}

//https://www.espn.com/apis/devcenter/docs/teams.html#leagues-object | https://www.espn.com/apis/devcenter/docs/athletes.html#leagues-object
export interface League {
	id: string;
	espnId: number; // espn stores as number,
	name: string;
	abbreviation: string;
	shortName: string;
	groupId: string | number; //	espn docs: (String or Number) ID of a conference or division within the league
	athletes: Athlete[]; // espn docs is unclear, not sure if it means all or some? unnecessary if all maybe? seems like alot of info espcially since we already have teams and teams have their athletes
	superstars: Athlete[];
	team: Team[];
}

//https://www.espn.com/apis/devcenter/docs/teams.html#teams-object
export interface Team {
	id: string;
	espnId: number;
	location: string;
	name: string;
	nickname: string;
	abbreviation: string;
	groups: object[];
	color: string; //hexadecimal value of the team's identifying color
	logos: object[];
	venues: object[];
	record: object;
	ranks: objects[];
	athletes: Athlete[];
	statLeaders: object[]; // the espn doc has this, curious of what it is
	leaders: object; // the espn doc has this, curious of what it is
	superstars: Athlete[];
}

//https://www.espn.com/apis/devcenter/docs/athletes.html#athletes-object
export interface Athlete {
	id: string; // espn stores as number, thinking we just convert to string?
	espnId: number; // espn stores as number
	firstName: string;
	lastName: string;
	displayName: string;
	shortName: string;
	dateOfBirth: string;
	age: number;
	headshots: object[];
	jersey: number;
	rookieYear: number;
	experience: number;
	team: Team;
	pastTeams: Team[];
}
