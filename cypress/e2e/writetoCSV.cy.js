import { faker } from "@faker-js/faker";

describe("Writing to files", () => {
  it("Write into csv file", () => {
    const generateUserData = () => ({
      Name: faker.person.fullName(),
      Age: faker.number.int({ min: 0, max: 100 }),
      Email: faker.internet.email(),
    });

    const numberOfUsers = 8;
    const dataCsv = Array.from({ length: numberOfUsers }, generateUserData);

    cy.writeToCSV("cypress/fixtures", "createuser.csv", dataCsv);
  });
});
