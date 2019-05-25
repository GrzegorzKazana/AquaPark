import axios from "axios";

const baseUrl = "http://localhost:51232/api/";

export const fetchDictFromApi = (name, url) =>
  axios.get(baseUrl + url).then(res => res.data);

const signUpEndpoint = "users/registeruser";
export const signUpUser = userData =>
  axios
    .post(baseUrl + signUpEndpoint, {
      Login: userData.name,
      Password: userData.password,
      Name: userData.name,
      Surname: userData.surname,
      Email: userData.email
    })
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success ? Promise.resolve(data) : Promise.reject(data.status)
    );

const signInEndpoint = "users/login";
export const logInUser = (email, password) =>
  axios
    .post(baseUrl + signInEndpoint, { Email: email, Password: password })
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success ? Promise.resolve(data) : Promise.reject(data.status)
    );

const logOutUserExndpoint = "";
export const logOutUser = token =>
  axios
    .post(baseUrl + logOutUserExndpoint, {
      userToken: token
    })
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success ? Promise.resolve(data) : Promise.reject(data.status)
    );
