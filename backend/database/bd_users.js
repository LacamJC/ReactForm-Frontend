const Sequelize = require('sequelize')
const database = require('./connection')

const bd_users = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING
    },

    password: {
        type: Sequelize.STRING
    }
})

// bd_users.sync({force: true})

module.exports = bd_users