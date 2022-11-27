import {foodModel} from '../models/foodModel.js'
import _ from "lodash";

export const getFoods = async (req, res) => {
    try {
        const foods = await foodModel.find();

        res.status(200).json(foods);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const addFood = async (req, res) => {
    try {
        const foodList = req.body
        foodList.map( async (food) => {
            const f = await foodModel(food);
            await f.save();
        })

        res.status(200).send("OK");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};