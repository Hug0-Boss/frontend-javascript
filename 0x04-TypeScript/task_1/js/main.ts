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
