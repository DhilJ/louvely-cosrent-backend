require("dotenv").config();
console.log("Database Host:", process.env.DB_HOST);

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const User = require('./models/User');
const Kostum = require('./models/Kostum');

const app = express();
app.use(express.json());
app.use(cors());

// Import Routes (Pastikan yang diekspor adalah router)
const authRoutes = require('./routes/auth');
const kostumRoutes = require('./routes/kostum');

app.use('/api/auth', authRoutes);
app.use('/api/kostum', kostumRoutes);

app.get('/', (req, res) => {
    res.send('Backend Penyewaan Kostum Berjalan!');
});

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);

    try {
        await sequelize.authenticate();
        console.log('Database connected!');
        await sequelize.sync({ alter: true });
        console.log('Database telah sinkron dengan model!');
    } catch (err) {
        console.error('Gagal menyinkronkan database:', err);
    }
});
