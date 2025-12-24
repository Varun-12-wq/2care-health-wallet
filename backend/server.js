const cors = require("cors");
const express = require("express");
const db = require("./db");

const app = express();
app.use(cors());
const PORT = 5050;

app.use(express.json());

/* ROOT */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* CREATE RECORD */
app.post("/records", (req, res) => {
  const { name, age, condition, balance } = req.body;

  if (!name || !age || !condition || balance === undefined) {
    return res.status(400).json({ error: "All fields required" });
  }

  const query =
    "INSERT INTO records (name, age, condition, balance) VALUES (?, ?, ?, ?)";

  db.run(query, [name, age, condition, balance], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

/* READ ALL */
app.get("/records", (req, res) => {
  db.all("SELECT * FROM records", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

/* READ ONE */
app.get("/records/:id", (req, res) => {
  db.get(
    "SELECT * FROM records WHERE id = ?",
    [req.params.id],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ error: "Not found" });
      res.json(row);
    }
  );
});

/* UPDATE */
app.put("/records/:id", (req, res) => {
  const { name, age, condition, balance } = req.body;

  db.run(
    `UPDATE records 
     SET name=?, age=?, condition=?, balance=? 
     WHERE id=?`,
    [name, age, condition, balance, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

/* DELETE */
app.delete("/records/:id", (req, res) => {
  db.run(
    "DELETE FROM records WHERE id = ?",
    [req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ deleted: this.changes });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});