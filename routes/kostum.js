const router = require('express').Router();
router.post('/login', (req, res) => {
    res.json({ message: "Login berhasil!" });
});
module.exports = router; // ✅ HARUS router langsung! 
