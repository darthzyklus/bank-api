"use strict";

const { QueryTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "pablo@doe.com",
        fullName: "Pablo Doe",
        password:
          "$2a$10$t1mhBcefKuhD4cvbo.A3Au5Nv5IKoathwMuq6i5aEcSmljqyl2pZi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "sara@doe.com",
        fullName: "Sara Doe",
        password:
          "$2a$10$t1mhBcefKuhD4cvbo.A3Au5Nv5IKoathwMuq6i5aEcSmljqyl2pZi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "bob@doe.com",
        fullName: "Bob Doe",
        password:
          "$2a$10$t1mhBcefKuhD4cvbo.A3Au5Nv5IKoathwMuq6i5aEcSmljqyl2pZi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const users = await queryInterface.sequelize.query(`SELECT id FROM Users`, {
      type: QueryTypes.SELECT,
    });

    await queryInterface.bulkInsert("Transfers", [
      {
        fromUserId: users[0].id,
        toUserId: users[1].id,
        value: 100,
        title: "Payment of October",
        description: "Payment of the work on October by 100",
        action: "OUT",
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fromUserId: users[0].id,
        toUserId: users[1].id,
        value: 120.5,
        title: "Payment of November",
        description: "Payment of the work on November by 120.50",
        action: "OUT",
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fromUserId: users[1].id,
        toUserId: users[2].id,
        value: 99.99,
        title: "Payment of chocolates",
        description: "Payment of chocolates by 99.99",
        action: "OUT",
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Transfers", null, {});
  },
};
