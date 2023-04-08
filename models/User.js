import { DataTypes } from 'sequelize'
import { sequelize } from '../db/pgConnect.js'

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      validate: {
        len: [3, 30],
        notNull: {
          msg: 'Please provide Name',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format',
        },
        notNull: {
          msg: 'Please provide Email',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        notNull: {
          msg: 'Please provide Password',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      trim: true,
      defaultValue: 'lastName',
      validate: {
        len: [3, 20],
      },
    },
    location: {
      type: DataTypes.STRING,
      trim: true,
      defaultValue: 'Big City',
      validate: {
        len: [3, 20],
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
  },
)

export default User
