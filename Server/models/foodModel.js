import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    foodName: String,
    foodCode: String,
    foodPrice: String,
    foodIcon: String,
});

export const foodModel = mongoose.model("foodModel", foodSchema);
