import axios from "axios";

//Local Sever
export const apiURL = "http://localhost:5000";

// export const apiURL = "https://agile-savannah-65614.herokuapp.com"

export default axios.create({
  baseURL: apiURL,
  headers: {
    "Content-type": "application/json",
  },
});
