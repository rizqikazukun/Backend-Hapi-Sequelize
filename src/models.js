const { Sequelize, DataTypes } = require('sequelize')
const config = require('./configs')

const db = new Sequelize(config.sql.db, config.sql.username, config.sql.password, {
  host: config.sql.host,
  dialect: 'mysql'

})

const produk = db.define('produk', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama_produk: {
    type: DataTypes.STRING,
    allowNull: true
  },
  keterangan: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
},
{
  freezeTableName: true,
  timestamps: false
})

module.exports = produk
