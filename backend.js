function login(username, password) {
  if (username === "admin" && password === "5678") {
    return "Login Successful";
  }
  return "Invalid Credentials";
}

module.exports = login;