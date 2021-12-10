"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "john@doe.com",
        fullName: "John Doe",
        password:
          "$2a$10$t1mhBcefKuhD4cvbo.A3Au5Nv5IKoathwMuq6i5aEcSmljqyl2pZi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
