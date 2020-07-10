import axios from "axios";

export function api() {
  return axios.create({
    baseURL: "https://react-yazi-yorum.herokuapp.com",
  });
}
