async function logoutComponent(page) {
  await page.click('#user-menu');
  await page.click('#logout-button');
}

module.exports = { logoutComponent };
