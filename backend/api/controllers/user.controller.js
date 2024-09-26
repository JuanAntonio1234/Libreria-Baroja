/* eslint-disable no-undef */
// user.controller.js

const User = require('../models/user.model.js')

async function getAllUsers(req, res) {
  const users = await User.findAll()
  res.send(users)
}

async function getUserById(req, res) {
  const user = await User.findByPk(res.locals.user.id)
  res.send(user)
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    res.status("Error --> createUser").send(error)
  }
}

async function updateUser(req, res) {
  try {
    console.log(res.locals.user)
    const user = await User.update({
      rol: "premiumUser"
    }, {
      where: { id: res.locals.user.id },
    })
    res.send(user)
  } catch (error) {
    console.error("Error --> updateUser", error);
    res.status(500).send({ error: "Error actualizando el usuario", details: error.message });
  }
}


async function deleteUserById(req, res) {
  try {
    const user = await User.destroy({
      where: { id: req.params.id },
    })
    res.send(user)
  } catch (error) {
    res.status("Error --> deleteUser").send(error)
  }
}

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
  updateUser,
  deleteUserById
}
