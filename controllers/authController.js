const createError = require("http-errors");

const userDb = {
  "test@mail.com": {
    id: "1",
    name: "Test",
    email: "test@mail.com",
    password: "qwerty",
  },
};

module.exports.login = (req, res, next) => {
  // отримати дані з body
  const {
    body: { email, password },
  } = req;
  // перевірити, чи існує
  // ні - 404
  if (!(email in userDb)) {
    return next(createError(404, "User Not Found"));
  }
  // так -
  // чи співпадає пароль
  // ні - 401
  if (userDb[email].password !== password) {
    return next(createError(401, "Email or password is not correct"));
  }
  // так - 200 user без пароля
  const preparedUser = { ...userDb[email] };
  delete preparedUser.password;

  res.status(200).send(preparedUser);
};

module.exports.signUp = (req, res, next) => {
  // отримати дані з запиту
  const { body } = req;
  // перевіряємо, чи юзер існує

  // якщо є, то помилка
  if (body.email in userDb) {
    return next(createError(409, "User is already exists"));
  }
  // ні - створити користувача
  const createdUser = { ...body, id: Date.now() };
  userDb[body.email] = createdUser;

  // повернути користувача без пароля
  const preparedUser = { ...createdUser };
  delete preparedUser.password;

  res.status(201).send(preparedUser);
};
