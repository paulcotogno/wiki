import cron from 'node-cron';
import puppeteer from 'puppeteer';

const URL = process.env.URL || 'google.com';
const EMAIL = process.env.EMAIL || 'default@mail.com';
const MDP = process.env.MDP || 'bite';

const timeout = () => {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

const open = async () => {
  let browser;

  try {
    browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH, 
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(URL);
    
    await page.setViewport({width: 1080, height: 1024});

    await page.locator('#email').fill(EMAIL);
    await page.locator('#password').fill(MDP);
    await page.locator('form > button').click();

    const start = await page.locator('main > div > button').waitHandle();
    await start.click();

    console.log('START');

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

cron.schedule('*/10 * * * *', async () => {
  console.log('CRON');
  open();
});