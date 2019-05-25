import axios from "axios";

const baseUrl = "http://localhost:51232/api/";

export const fetchDictFromApi = (name, url) =>
  axios.get(baseUrl + url).then(res => res.data);
