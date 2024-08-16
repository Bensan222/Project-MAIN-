import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
try {
  await prisma.user.create({
    data: {
      name: "John Doe",
      password: "Password123$",
      email: "johndoe@example.com",
    },
  });

  await prisma.suspect.createMany({
    data: [
      {
        id: "S001",
        name: "John Doe",
        address: "123 Main St, Anytown USA",
        stateOfOrigin: "California",
        nationality: "American",
        gender: "MALE",
        age: 35,
        phoneNumber: "555-1234",
        crimeCommitted: "Theft",
        penalty: "2 years in prison",
        incidentLocation: "456 Oak Rd, Anytown USA",
        reportedTime: new Date(2023, 10, 1),
        dateOfArrest: new Date("2023-04-15T00:00:00Z"),
        arrestedBy: "Officer Jane Smith",
      },
      {
        id: "S002",
        name: "Jane Smith",
        address: "789 Elm St, Anytown USA",
        stateOfOrigin: "New York",
        nationality: "American",
        gender: "FEMALE",
        age: 28,
        phoneNumber: "555-5678",
        crimeCommitted: "Assault",
        penalty: "1 year in prison",
        incidentLocation: "321 Maple Ln, Anytown USA",
        reportedTime: new Date(2023, 8, 1),
        dateOfArrest: new Date("2023-03-20T00:00:00Z"),
        arrestedBy: "Officer John Doe",
      },
      {
        id: "S003",
        name: "Michael Johnson",
        address: "456 Pine St, Anytown USA",
        stateOfOrigin: "Texas",
        nationality: "American",
        gender: "MALE",
        age: 42,
        phoneNumber: "555-9012",
        crimeCommitted: "Fraud",
        penalty: "3 years in prison",
        incidentLocation: "789 Oak Rd, Anytown USA",
        reportedTime: new Date(2024, 10, 1),
        dateOfArrest: new Date("2023-02-10T00:00:00Z"),
        arrestedBy: "Officer Sarah Lee",
      },
    ],
  });

  // Disconnect from the database
  await prisma.$disconnect();
  process.exit(0);
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
