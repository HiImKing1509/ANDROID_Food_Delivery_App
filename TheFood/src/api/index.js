import axios from "axios";

const url = "http://localhost:5000"

export const getFoodList = () => axios.get(`${url}/food`)