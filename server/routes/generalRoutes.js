import express from "express";
// import * as generalController from "../controllers/general.controller.js";
import {getUserById} from "../controllers/general.controller.js";

const router = express.Router();

// router.get("/user/:userId", generalController.getUserById);
router.get("/user/:userId", getUserById);

export default router;