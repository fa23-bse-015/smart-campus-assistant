function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login Successful";
  }
  return "Invalid Credentials";
}

module.exports = login;