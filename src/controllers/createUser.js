const { User } = require('../db/db.js')


const createUser = async (name, email, password) => {
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    throw new Error("Ya hay un registro con este email");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  return user;
};

module.exports = {
  createUser,
};