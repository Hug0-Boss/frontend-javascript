interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2]

const table = document.createElement("table");
table.border = "1";

studentsList.forEach((student) => {
      // Create a new row
    const row = document.createElement("tr");

    // Create cells for first name and location
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    // Assign text content
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table
    table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);