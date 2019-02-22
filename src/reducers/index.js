import { combineReducers } from "redux";
import { getUsers } from "./UserReduce";
import { getUserById } from "./UserReduce";

export default combineReducers({
    getUsers,
    getUserById
});