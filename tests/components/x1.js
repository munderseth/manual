async function x1(page, { p1, p2, m1 } = {}) {
    p1 = "one";
    p2 = "two";
    m1 = "m1";
    await page.click('#user-name');
}

module.exports = { x1 };
