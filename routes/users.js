const { Op } = require("sequelize");
const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/:userId/balance", async (req, res) => {
  const { userId } = req.params;

  try {
    const entryTransfers = await db.sequelize.models.Transfer.findAll({
      where: { toUserId: userId },
    });
    const exitTransfers = await db.sequelize.models.Transfer.findAll({
      where: { fromUserId: userId },
    });

    const entryTransfersAmount = entryTransfers.reduce(
      (acc, curr) => acc + curr.value,
      0
    );

    const exitTransfersAmount = exitTransfers.reduce(
      (acc, curr) => acc + curr.value,
      0
    );

    const balance = entryTransfersAmount - exitTransfersAmount;

    res.json({ balance });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

router.get("/:userId/transfers", async (req, res) => {
  const { userId } = req.params;

  try {
    const transfers = await db.sequelize.models.Transfer.findAll({
      where: {
        [Op.or]: [{ toUserId: userId }, { fromUserId: userId }],
      },

      include: [
        {
          as: "sender",
          require: true,
          model: db.sequelize.models.User,
          attributes: ["id", "fullName", "email"],
        },
        {
          as: "receiver",
          require: true,
          model: db.sequelize.models.User,
          attributes: ["id", "fullName", "email"],
        },
      ],
    });

    res.json({ transfers });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

module.exports = router;
