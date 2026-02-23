function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

function validatePassword(password) {
  return password.length >= 6;
}

module.exports = { validateEmail, validatePassword };
