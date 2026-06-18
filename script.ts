import cron from 'node-cron';
import puppeteer, { Page } from 'puppeteer';
import { readFileSync } from 'fs';

import * as dotenv from 'dotenv';

dotenv.config();

const URL = process.env.URL || 'google.com';
const EMAIL = process.env.EMAIL || 'default@mail.com';
const MDP = process.env.MDP || 'bite';
const MAIN = process.env.MAIN || 'Icez';

interface Account {
    email: string,
    mdp: string
}

const timeout = () => {
    return new Promise((resolve) => setTimeout(resolve, 500));
}

const connect = async (page: Page, { email, mdp }: Account) => {
    await page.goto(URL);

    await page.setViewport({ width: 1080, height: 1024 });

    await page.locator('#email').fill(email);
    await page.locator('#password').fill(mdp);
    await page.locator('form > button').click();

    await timeout();

    console.log('USER CONNECTED');
}


const openCard = async ({ email, mdp }: Account) => {
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