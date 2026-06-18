import cron from 'node-cron';
import { readFileSync } from 'fs';

import * as dotenv from 'dotenv';

import { openCard } from './openings';
import { tradeCard } from './trades';
import { autoAccept } from './accepts';

dotenv.config();

export const URL = process.env.URL || 'google.com';
export const EMAIL = process.env.EMAIL || 'default@mail.com';
export const MDP = process.env.MDP || 'bite';
export const MAIN = process.env.MAIN || 'Icez';

export interface Account {
  email: string,
  mdp: string
}

const runAllOpenings = async () => {
  const accounts = JSON.parse(readFileSync('accounts.json', 'utf8')) as Account[];
  console.log('CRON OUVERTURE');

  console.time('ouverture');
  for (let i = 0; i < accounts.length; i++) {
    await openCard({ email: accounts[i].email, mdp: accounts[i].mdp });
  }
  await openCard({ email: EMAIL, mdp: MDP });
  console.timeEnd('ouverture')
}

const runAllTrades = async () => {
  const accounts = JSON.parse(readFileSync('accounts.json', 'utf8')) as Account[];
  console.log('CRON TRADE');

  console.time('trade');
  for (let j = 0; j < 7; j++) {

    for (let i = 0; i < accounts.length; i++) {
      await tradeCard({ email: accounts[i].email, mdp: accounts[i].mdp });
    }

    console.time('accept');
    await autoAccept();
    console.timeEnd('accept');
  }
  console.timeEnd('trade');
}

// CRONS
cron.schedule('*/10 * * * *', runAllOpenings);
cron.schedule('0 3 * * *', runAllTrades);