import { faker } from "@faker-js/faker";

describe("Writing to files", () => {
  it("Write into excel file", () => {
    const generateUserData = () => ({
      Name: faker.person.fullName(),
      Age: faker.number.int({ min: 0, max: 100 }),
      Email: faker.internet.email(),
    });

    const numberOfUsers = 2;
    const data = Array.from({ length: numberOfUsers }, generateUserData);

    const filePath = "cypress/fixtures/user.xlsx";
    cy.writeToExcel(data, filePath);
  });
});
