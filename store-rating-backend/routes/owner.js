const express = require("express");
const router = express.Router();
const db = require("../config/db");
const verifyToken = require("../middleware/auth");

router.get("/dashboard", verifyToken, (req, res) => {
  const ownerId = req.user.id;

  db.query(
    `SELECT u.name AS userName, r.rating 
     FROM ratings r 
     JOIN stores s ON r.store_id = s.id 
     JOIN users u ON r.user_id = u.id 
     WHERE s.owner_id = ?`,
    [ownerId],
    (err, ratings) => {
      if (err) return res.status(500).json(err);

      db.query(
        `SELECT AVG(r.rating) AS averageRating 
         FROM ratings r JOIN stores s ON r.store_id = s.id 
         WHERE s.owner_id = ?`,
        [ownerId],
        (err, avgResult) => {
          if (err) return res.status(500).json(err);
          res.json({ ratings, averageRating: avgResult[0].averageRating });
        }
      );
    }
  );
});

module.exports = router;
