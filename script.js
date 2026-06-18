import cron from 'node-cron';
import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';

import * as dotenv from 'dotenv';

dotenv.config();

const URL = process.env.URL || 'google.com';
const EMAIL = process.env.EMAIL || 'default@mail.com';
const MDP = process.env.MDP || 'bite';
const MAIN = process.env.MAIN || 'Icez';

const timeout = () => {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

const connect = async (page, account) => {
  await page.goto(URL);

  await page.setViewport({ width: 1080, height: 1024 });

  await page.locator('#email').fill(account.email);
  await page.locator('#password').fill(account.mdp);
  await page.locator('form > button').click();

  console.log('USER CONNECTED');
}

const openCard = async ({ email, mdp }) => {
  let browser;

  try {
    browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // CONNECT THE USER
    await connect(page, { email, mdp });

    await page.locator('main > div > button').click();

    await timeout();
    await page.locator('main > div > div > div > button:last-of-type').click();
    await timeout();
    await page.locator('main > div > div > div > button:last-of-type').click();
    await timeout();
    await page.locator('main > div > div > div > button:last-of-type').click();
    await timeout();
    await page.locator('main > div > div > div > button:last-of-type').click();
    await timeout();
    await page.locator('main > div > div > button').click();

  } catch (error) {
    console.error("Erreur lors de l'exécution de Puppeteer :", error);
  } finally {
    if (browser) await browser.close();
  }
}

const tradeCard = async ({ email, mdp }) => {
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

    if (fullTexte !== MAIN) throw Error("Mauvaise correspondance dans la recherche de l'utilisateur principal, " + fullTexte + ':' + MAIN);

    await page.locator('.backdrop-blur-sm > div > div:last-of-type > button').click();

    await timeout();

    // Page de trade
    const Add = new Promise(async (resolve, reject) => {
      for (let i = 0; i < 100; i++) {
        if (i == 49 || i == 98) {
          try {
            await page.locator('body > div:last-of-type > div > div:nth-child(4) > div > div > div:last-of-type > div:last-of-type > button:last-of-type').setTimeout(1000).click();
          } catch (err) {
            resolve();
            return;
          }

          await timeout();
        }

        if (i === 0) {
          await page.locator('body > div:last-of-type > div > div:nth-child(4) > div > div > div:nth-child(2) > div > button').click();
          continue;
        }

        // Autres cartes
        try {
          await page.locator('body > div:last-of-type > div > div:nth-child(4) > div > div > div:nth-child(3) > div > button').setTimeout(1000).click();
        } catch (err) {
          resolve();
          return;
        }
      }
      console.log('fin !!!');

      resolve();
    })
    await Add;

    await page.locator('body > div:last-of-type > div > div:nth-child(5) > div > button:last-of-type').click();

    await timeout();
    await timeout();
  } catch (error) {
    console.error("Erreur lors du trade : " + Date.now() + " pour le compte : " + email, error);
  } finally {
    if (browser) await browser.close();
  }
}

const autoAccept = async () => {
  let browser;

  try {
    browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    await connect(page, { email: EMAIL, mdp: MDP });

    await timeout();

    await page.goto('https://www.wiki-masters.com/trades');

    const promise = new Promise(async (resolve, reject) => {
      const call = async () => {
        try {
          await page.locator('main > div > div:last-of-type > div > div:last-of-type > div > div:last-of-type > button:first-of-type').setTimeout(2000).click();
          await timeout();
          call();
        } catch (err) {
          resolve();
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

cron.schedule('*/10 * * * *', async () => {
  const accounts = JSON.parse(readFileSync('accounts.json', 'utf8'));
  console.log('CRON OUVERTURE');

  console.time('ouverture');
  for (let i = 0; i < accounts.length; i++) {
    await openCard({ email: accounts[i].email, mdp: accounts[i].mdp });
  }
  await openCard({ email: EMAIL, mdp: MDP });
  console.timeEnd('ouverture')
});

cron.schedule('0 3 * * *', async () => {
  const accounts = JSON.parse(readFileSync('accounts.json', 'utf8'));
  console.log('CRON TRADE');

  console.time('trade');
  for (let j = 0; j < 7; j++) {
    for (let i = 0; i < accounts.length; i++) {
      await tradeCard({ email: accounts[i].email, mdp: accounts[i].mdp });
    }
  }
  console.timeEnd('trade');

  console.time('accept');
  await autoAccept();
  console.timeEnd('accept');
});