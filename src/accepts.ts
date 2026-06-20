import puppeteer from "puppeteer";
import { connect, timeout } from "./utils";
import { EMAIL, MDP } from "./script";

export const autoAccept = async () => {
  let browser;

  try {
    browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    await connect(page, { email: EMAIL, mdp: MDP });

    await timeout(1000);

    await page.goto('https://www.wiki-masters.com/trades');

    const promise = new Promise(async (resolve, reject) => {
      const call = async () => {
        try {
          await page.locator('main > div > div:last-of-type > div > div:last-of-type > div > div:last-of-type > button:first-of-type').setTimeout(5000).click();
          await timeout(5000);
          call();
        } catch (err) {
          resolve(() => { });
          return;
        }
      }
      call();
    })

    await promise;
  } catch (error) {
    console.error("Erreur lors du trade : " + Date.now() + " pour le compte : " + EMAIL, error);
  } finally {
    if (browser) await browser.close();
  }
}
