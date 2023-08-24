"use strict";
// Utilty types
const updateAssigment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: 'compsci123',
    title: 'Fianal Project',
    grade: 0,
};
console.log(updateAssigment(assign1, { grade: 95 }));
const assignGraded = updateAssigment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database, ect
    return assign;
};
const assignVerified = {
    ...assignGraded,
    verified: true,
};
recordAssignment({ ...assignGraded, verified: true });
// Record\
const hexColorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
};
const finalGrades = {
    Sara: 'B',
    Kelly: 'U',
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentIs: 'k123',
    grade: 85,
};
const preview = {
    studentId: 'k123',
    title: 'Final Project',
};
// ReturnType
// type newAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
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
fetchUsers().then((users) => console.log(users));
//# sourceMappingURL=index.js.map