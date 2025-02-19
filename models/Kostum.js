const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Kostum = sequelize.define('Kostum', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_kostum: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seri: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ukuran: {
        type: DataTypes.STRING,
        allowNull: false
    },
    keterangan: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Ready', 'Not Ready', 'Coming Soon'),
        defaultValue: 'Ready'
    }
}, {
    timestamps: true
});

module.exports = Kostum;
