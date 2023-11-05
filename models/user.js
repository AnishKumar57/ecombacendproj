'use strict';
const {
  Model
} = require('sequelize');

var bcrypt = require('bcryptjs');           // require becrypt

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true           // validate that it is an Email
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        // isAlphanumeric: true,   // removed because becrypt change it to a different string
        len: [5,100],             // password length should be 5 to 4 0
      }
    },
    userName: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async(user) => {
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync("user.password/\/", salt);
    user.password = hashedPassword;
  });



  return User;
};