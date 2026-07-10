async function loginComponent(page, { username, password } = {}) {
  if (username == null) throw new Error("Required input 'username' is not set");
  if (password == null) throw new Error("Required input 'password' is not set");

  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#login-button');
}

module.exports = { loginComponent };
  