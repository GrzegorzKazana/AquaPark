import axios from "axios";

const baseUrl = "http://localhost:51232/api/";

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

const logOutUserExndpoint = "users/logout";
export const logOutUser = token =>
  axios
    .post(baseUrl + logOutUserExndpoint, {
      userToken: token
    })
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success ? Promise.resolve(data) : Promise.reject(data.status)
    );

const editUserDataEndpoint = "users/edituser";
export const editUserData = userData => {
  console.log(userData);
  return axios
    .post(baseUrl + editUserDataEndpoint, userData)
    .then(res => Promise.resolve(res.data))
    .then(data =>
      data.success ? Promise.resolve(data) : Promise.reject(data.status)
    );
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
      data.success ? Promise.resolve(data) : Promise.reject(data.status)
    );
};

export const editDict = (userToken, dict, dictData) => {
  console.log(dict, dictData);
  return axios
    .post(baseUrl + dict.updateUrl, {
      userToken,
      ZonesWithTicketsDto: dictData
    })
    .then(res => Promise.resolve(res.data));
};
