const express = require("express");
const router = express.Router();
const db = require("../config/db");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, (req, res) => {
  const userId = req.user.id;

  db.query(
    `SELECT s.*, 
     (SELECT rating FROM ratings WHERE user_id = ? AND store_id = s.id LIMIT 1) AS userRating,
     (SELECT AVG(rating) FROM ratings WHERE store_id = s.id) AS averageRating
     FROM stores s`,
    [userId],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
});

router.post("/ratings", verifyToken, (req, res) => {
  const { storeId, rating } = req.body;
  const userId = req.user.id;

  db.query(
    "REPLACE INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?)",
    [userId, storeId, rating],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Rating saved" });
    }
  );
});

module.exports = router;
