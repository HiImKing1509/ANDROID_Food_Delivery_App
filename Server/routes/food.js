import express from "express";
import {getFoods, addFood} from '../controllers/food.js';

const router = express.Router();

router.get("/", getFoods);
router.post("/", addFood);

export default router;
