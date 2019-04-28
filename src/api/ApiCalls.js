import axios from "axios";

export const fetchDictFromApi = (name, url) =>
  axios.get(url).then(res => res.json());
