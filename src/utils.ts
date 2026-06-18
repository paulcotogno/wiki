import { Page } from "puppeteer";
import { Account, URL } from "./script";


export const timeout = (time?: number) => {
    return new Promise((resolve) => setTimeout(resolve, time || 500));
}

export const connect = async (page: Page, { email, mdp }: Account) => {
    await page.goto(URL);

    await page.setViewport({ width: 1080, height: 1024 });

    await page.locator('#email').fill(email);
    await page.locator('#password').fill(mdp);
    await page.locator('form > button').click();

    console.log('USER CONNECTED : ' + email);

    await timeout();
}