import { areasDict, pricesDict, classDiscountsDict, userDb } from "./MockData";

const MOCK_API_TIMEOUT = 500;

const defaultResolve = res =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(res), MOCK_API_TIMEOUT)
  );

const defaultReject = res =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(res), MOCK_API_TIMEOUT)
  );

export const fetchDictFromApi = (name, url) => {
  switch (name) {
    case "AREAS":
      return defaultResolve(areasDict);
    case "PRICES":
      return defaultResolve(pricesDict);
    case "CLASS_DISCOUNTS":
      return defaultResolve(classDiscountsDict);
    default:
      return defaultReject("requested dict does not exist");
  }
};

export const logInUser = (email, password) => {
  const user = userDb.find(
    user => user.email === email && user.password === password
  );
  return user ? defaultResolve(user) : defaultReject("user not found");
};

export const logOutUser = (email, password) => {
  return defaultResolve({ status: "ok" });
};

export const signUpUser = userData => {
  userDb.push({
    email,
    password,
    name: email,
    surname: email,
    isAdmin: false
  });
  return logInUser(userData.email, userData.password);
};

export const purchaseCart = (userData, cart) => {
  console.log(userData, "just bought", cart);
  return defaultResolve({});
};

export const editDict = (userToken, dict, dictData) => {
  console.log(dict, dictData);
};

export const editUserData = userData => {
  console.log(userData);
};
