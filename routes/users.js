const express = require("express");
const router = express.Router();
const users = require("../services/users");

router.get("/", async (req, res, next) => {
  try {
    res.json(await users.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    res.json(await users.getById(id));
  } catch (err) {
    console.error(`Error while getting user (${id}) `, err.message);
    next(err);
  }
});

router.get("/test", async (req, res, next) => {
  try {
    res.json(await users.test());
  } catch (err) {
    console.error(`Error while getting test) `, err.message);
    next(err);
  }
});

module.exports = router;
