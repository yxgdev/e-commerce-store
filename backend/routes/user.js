import express from "express";
import {
  verifyToken,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    );
  }
});
export default router;
