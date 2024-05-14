export const addLoggedInUser = (user) => {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
};

export const getLoggedInUser = () => {
  const result = localStorage.getItem("loggedInUser");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const removeLoggedInUser = () => {
  localStorage.removeItem("loggedInUser");
};

export const addUserToken = (token) => {
  localStorage.setItem("userToken", JSON.stringify(token));
};

export const getUserToken = () => {
  const result = localStorage.getItem("userToken");
  const token = result ? JSON.parse(result) : null;
  return token;
};

export const removeUserToken = () => {
  localStorage.removeItem("userToken");
};
