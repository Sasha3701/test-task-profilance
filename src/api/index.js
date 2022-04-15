import dataUsers from "../data/users";

class Api {
  login = async ({ login, password }) => {
    const user = dataUsers.find((user) => user.login === login);
    if (user && user.password === password) {
      return await Promise.resolve(user);
    }
    return await Promise.reject();
  };
}

const api = new Api();

export default api;
