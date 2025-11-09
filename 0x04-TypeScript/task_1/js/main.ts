interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // allows any additional property
}


const teacher1: Teacher = {
  firstName: "Grace",
  lastName: "Okafor",
  fullTimeEmployee: true,
  location: "Abuja",
  yearsOfExperience: 7,
  contract: false, // extra attribute allowed
};

const teacher2: Teacher = {
  firstName: "Samuel",
  lastName: "Johnson",
  fullTimeEmployee: false,
  location: "Lagos",
  yearsOfExperience: 5,
  contract: true, // extra attribute allowed
};

const teacher3: Teacher = {
  firstName: "James",
  lastName: "Ibrahim",
  fullTimeEmployee: false,
  location: "Lagos"
  // yearsOfExperience is optional, so this is fine
};


interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));  // J. Doe
console.log(printTeacher("Mary", "Smith")); // M. Smith


// Interfaces
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test
const StudentClassConstructor: StudentConstructor = StudentClass;

const student = new StudentClassConstructor("John", "Doe");
console.log(student.displayName());      // John
console.log(student.workOnHomework());   // Currently working
