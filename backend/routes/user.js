import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("/useretest");
});

export default router;
