interface Geo {
	lat: string;
	lng: string;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	role: 'admin' | 'user';
	company: Company;
}

export interface AuthContextType {
	user: User | null;
	authError: string | null;
	login: (email: string) => void;
	logout: () => void;
}
