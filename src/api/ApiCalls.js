import axios from "axios";

export const fetchDictFromApi = url => axios.get(url).then(res => res.json());
