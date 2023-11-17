// const { Sequelize, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');

// module.exports = (sequelize) => {
//     const User = sequelize.define('User', {
//         email: {
//             type: DataTypes.STRING,
//             unique: true,
//             allowNull: false,
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     }, {
//         timestamps: true, // Add this line to explicitly define timestamps
//     });

//     User.beforeCreate(async (user) => {
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(user.password, salt);
//     });

//     User.prototype.validPassword = async function (password) {
//         return await bcrypt.compare(password, this.password);
//     };

//     return User;
// };
