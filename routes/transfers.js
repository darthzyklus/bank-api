const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const transfers = await db.sequelize.models.Transfer.findAll();
    res.json(transfers);
  } catch (error) {
    console.log(error);
  }
});

// TODO: Add a route that will create a transfer
// TODO: Add a route that will update a transfer
// TODO: Add a route that will delete a transfer

module.exports = router;
