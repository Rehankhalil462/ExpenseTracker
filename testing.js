const { faker } = require("@faker-js/faker");

let USERS = [];
function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    heading: faker.definitions.word({ length: { min: 10, max: 25 } }),
    img: faker.image.avatar(),
    createdAt: faker.date.recent(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});

console.log(USERS);
