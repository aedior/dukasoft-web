import axios from "axios";
import { SERVER_URL } from "../core";

export const axiosServer = axios.create({
    baseURL: SERVER_URL,
});