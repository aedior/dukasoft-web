import axios from "axios";
import { SERVER_URL } from "../core";

export const axiosNoUser = axios.create({
    baseURL: SERVER_URL,
});
