import puppeteer from "puppeteer";
import { Account, MAIN } from "./script";
import { connect, timeout } from "./utils";


export const tradeCard = async ({ email, mdp }: Account) => {
  let browser;

  try {
    browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // CONNECT THE USER
    await connect(page, { email, mdp });

    await timeout();

    // Aller chercher user a trade
    await page.goto("https://www.wiki-masters.com/trades");

    await page.locator('main > div > div > div > div > button').click();

    // Rechercher User a trade  
    try {
      await page.locator('body > div:last-child > div > div:nth-child(2) > input').setTimeout(500).fill(MAIN);
    } catch (err) {
      console.log('NO INPUT TO FILL');
    }

    /////////
    const test = await page.locator('.backdrop-blur-sm > div > div:last-of-type > button > span:first-of-type').waitHandle();
    const fullTexte = await test?.evaluate(el => el.textContent);

    console.log(fullTexte);

    if (fullTexte !== MAIN)
      throw Error("Mauvaise correspondance dans la recherche de l'utilisateur principal, " + fullTexte + ':' + MAIN);

    await page.locator('.backdrop-blur-sm > div > div:last-of-type > button').click();

    await timeout();

    // Page de trade
    const Add = new Promise(async (resolve, reject) => {
      for (let i = 0; i < 100; i++) {
        if (i == 49 || i == 98) {
          try {
            await page.locator('body > div:last-of-type > div > div:nth-child(4) > div > div > div:last-of-type > div:last-of-type > button:last-of-type').setTimeout(1000).click();
          } catch (err) {
            console.log('CATCH BUTTON NEXT PAGE');
            resolve(() => {});
            return;
          }

          await timeout();
        }

        if (i === 0) {
          await page.locator('body > div:last-of-type > div > div:nth-child(4) > div > div > div:nth-child(2) > div > button').setTimeout(1000).click()
            .catch(e => {
              console.log('CATCH CLICK ON FIRST CARD');
              resolve(() => {});
              return;
            });
          continue;
        }

        try {
          await page.locator('body > div:last-of-type > div > div:nth-child(4) > div > div > div:nth-child(3) > div > button').setTimeout(1000).click();
        } catch (err) {
          console.log('CATCH CLICK ON NEXT CARD n: ' + i);
          resolve(() => {});
          return;
        }
      }
      console.log('fin !!!');

      resolve(() => {});
    })
    await Add;

    await page.locator('body > div:last-of-type > div > div:nth-child(5) > div > button:last-of-type').setTimeout(2000).click()
      .catch(err => { throw Error('no button send trade') });

    await timeout();
  } catch (error) {
    console.error("Erreur lors du trade : " + Date.now() + " pour le compte : " + email, error);
  } finally {
    if (browser) await browser.close();
  }
}