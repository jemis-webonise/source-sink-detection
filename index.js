const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.webonise.com/");
   
    const f = await page.$("[class='nav-link']")
    const text = await (await f.getProperty('textContent')).jsonValue()
    console.log("Text is: " + text)
    await browser.close();
})();