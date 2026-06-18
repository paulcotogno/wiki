import puppeteer from 'puppeteer';
import { Account } from './script';
import { connect, timeout } from './utils';

const queries = {
    'OPEN_START': 'main > div > button',
    'OPEN_NEXT_CARD': 'main > div > div > div > button:last-of-type',
    'OPEN_END': 'main > div > div > button'
}

export const openCard = async ({ email, mdp }: Account) => {
    const { OPEN_START, OPEN_NEXT_CARD, OPEN_END } = queries;
    
    let browser;

    try {
        browser = await puppeteer.launch({
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        // CONNECT THE USER
        await connect(page, { email, mdp });

        
        await page.locator(OPEN_START).setTimeout(2000).click()
            .catch(err => { throw Error('PAS DE PACK A OUVRIR') });
        await timeout();
        
        await page.locator(OPEN_NEXT_CARD).click();
        await timeout();
        
        await page.locator(OPEN_NEXT_CARD).click();
        await timeout();
        
        await page.locator(OPEN_NEXT_CARD).click();
        await timeout();
        
        await page.locator(OPEN_NEXT_CARD).click();
        await timeout();

        await page.locator(OPEN_END).click();
        await timeout();
    } catch (error) {
        console.error("Erreur lors de l'ouverture de carte pour USER : " + email, error);
    } finally {
        if (browser) await browser.close();
    }
}
