// Utilty types

// Partial

type Assignment = {
	studentId: string;
	title: string;
	grade: number;
	verified?: boolean;
};

const updateAssigment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
	return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
	studentId: 'compsci123',
	title: 'Fianal Project',
	grade: 0,
};

console.log(updateAssigment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssigment(assign1, { grade: 95 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
	// send to database, ect
	return assign;
};

const assignVerified: Readonly<Assignment> = {
	...assignGraded,
	verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

// Record\

const hexColorMap: Record<string, string> = {
	red: '#ff0000',
	green: '#00ff00',
	blue: '#0000ff',
};

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
	Sara: 'B',
	Kelly: 'U',
};

interface Grades {
	assign1: number;
	assign2: number;
}

const gradeData: Record<Students, Grades> = {
	Sara: { assign1: 85, assign2: 93 },
	Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, 'studentIs' | 'grade'>;

const score: AssignResult = {
	studentIs: 'k123',
	grade: 85,
};

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = {
	studentId: 'k123',
	title: 'Final Project',
};

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, 'U'>;
type highGrades = Extract<LetterGrades, 'A' | 'B'>;

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
	return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

type User = {
	id: number;
	name: string;
	username: string;
	email: string;
};

const fetchUsers = async (): Promise<User[]> => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			if (err instanceof Error) {
				console.log(err.message);
			}
		});
	return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
)