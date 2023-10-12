import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a0ad6e8465624771845a8768277fc0e2",
  },
});
