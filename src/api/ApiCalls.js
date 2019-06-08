import axios from "axios";
import { notification } from "antd";

const baseUrl = "http://localhost:5000/api/";

export const fetchDictFromApi = (name, url) =>
  axios.get(baseUrl + url).then(res => res.data);

const signUpEndpoint = "users/registeruser";
export const signUpUser = userData =>
  axios
    .post(baseUrl + signUpEndpoint, {
      Password: userData.password,
      Name: userData.name,
      Surname: userData.surname,
      Email: userData.email
    })
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success
        ? Promise.resolve(data)
        : Promise.reject(new Error(data.status))
    )
    .catch(err => Promise.reject(err.message));

const signInEndpoint = "users/login";
export const logInUser = (email, password) =>
  axios
    .post(baseUrl + signInEndpoint, { Email: email, Password: password })
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success
        ? Promise.resolve(data)
        : Promise.reject(new Error(data.status))
    )
    .catch(err => Promise.reject(err.message));

const logOutUserExndpoint = "users/logout";
export const logOutUser = token =>
  axios
    .post(baseUrl + logOutUserExndpoint, {
      userToken: token
    })
    .then(res => {
      console.log(res);
      return Promise.resolve(res.data);
    })
    .then(data =>
      data.success
        ? Promise.resolve(data)
        : Promise.reject(new Error(data.status))
    )
    .catch(err => Promise.reject(err.message));

const editUserDataEndpoint = "users/edituser";
export const editUserData = (token, userData) => {
  const data = {
    userToken: token,
    ...userData
  };
  console.log(data);
  return axios
    .post(baseUrl + editUserDataEndpoint, data)
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success
        ? Promise.resolve(data)
        : Promise.reject(new Error(data.status))
    )
    .catch(err => Promise.reject(err.message));
};

const purchaseCartEndpoint = "orders/MakeNewOrder";
export const purchaseCart = (userData, cart) => {
  const UserData = {
    Email: userData.email,
    Name: userData.name,
    Surname: userData.surname
  };
  const TicketsWithClassDiscounts = cart.items.map(item => ({
    TicketTypeId: item.ticketTypeId,
    SocialClassDiscountId: item.discount ? item.discount.id : 0,
    NumberOfTickets: item.itemCount
  }));
  const order = {
    UserToken: userData.userToken || "",
    UserData,
    TicketsWithClassDiscounts
  };
  console.log(order);
  return axios
    .post(baseUrl + purchaseCartEndpoint, order)
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success
        ? Promise.resolve(data)
        : Promise.reject(new Error(data.status))
    )
    .catch(err => Promise.reject(err.message));
};

export const editDict = (userToken, dict, dictData) => {
  const data = dict.formatDictUpdate(userToken, dictData);
  console.log(data);
  return axios
    .post(baseUrl + dict.updateUrl, data)
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err.message));
};

const emitNewsletterEndpoint = "admin/SendNewsletter";
export const emitNewsletter = (token, message) =>
  axios
    .post(baseUrl + emitNewsletterEndpoint, {
      UserToken: token,
      Message: message
    })
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success
        ? notification.success({ message: data.status })
        : notification.success({ message: data.status })
    )
    .catch(err => Promise.reject(err.message));

const getRaportEndpoint = "reports/GetCurrentOccupancy";
export const getRaport = () =>
  axios
    .get(baseUrl + getRaportEndpoint)
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success
        ? Promise.resolve(data)
        : Promise.reject(new Error(data.status))
    )
    .catch(err => Promise.reject(err.message));

const getTimedRaportEndpoint = "reports/GetTimeOccupancy";
export const getTimedRaport = (dateStart, dateEnd) =>
  axios
    .get(baseUrl + getTimedRaportEndpoint, { params: { dateStart, dateEnd } })
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success
        ? Promise.resolve(data)
        : Promise.reject(new Error(data.status))
    )
    .catch(err => Promise.reject(err.message));
