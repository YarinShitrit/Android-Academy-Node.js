const topNStudentsAttendees = (students, attendees, N) => {
    const allStudentsAttendees = {};
    attendees.map((attendeesPerLecture) => {
        [...new Set(attendeesPerLecture)].map((student) => {
            allStudentsAttendees[student] = (allStudentsAttendees[student] || 0) + 1;
        });
    });
    const ourStudentAttendees = students.map((student) => {
        return {
            name: student,
            attendees: allStudentsAttendees[student]
        };
    })
    return ourStudentAttendees.sort(({
            name: nameA,
            attendees: attendeesA
        }, {
            name: nameB,
            attendees: attendeesB
        }) => attendeesB - attendeesA)
        .slice(0, N)
        .map(({
            name
        }) => name);
}

const result = topNStudentsAttendees(['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas'], [
    ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal'],
    ['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'],
    ['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex'],
    ['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal', 'Nitzan']
], 3)
console.log(result);