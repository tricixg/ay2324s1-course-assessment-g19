export type SerializableValue =
	| string
	| number
	| boolean
	| null
	| { [key: string]: SerializableValue }
	| SerializableValue[];

export type Modal<T> = {
	isOpen: boolean;
	data?: T;
};

export type Question = {
	id: string;
	title: string;
	description: string;
	category: string;
	complexity: string;
};
