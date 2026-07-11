async function newproject(page, { p1, p2 } ) {
    await page.click('#user-name');
}

module.exports = { newproject };
