import Axios from "axios";

const http = Axios.create({
    baseURL: "http://reactjsteachingproj.herokuapp.com/"
})
export default http;