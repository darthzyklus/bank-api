"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transfer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transfer.belongsTo(models.User, {
        foreignKey: "toUserId",
        as: "sender",
      });

      Transfer.belongsTo(models.User, {
        foreignKey: "fromUserId",
        as: "receiver",
      });
    }
  }
  Transfer.init(
    {
      action: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      value: DataTypes.FLOAT,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transfer",
    }
  );

  return Transfer;
};
