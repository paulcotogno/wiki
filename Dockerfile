FROM ghcr.io/puppeteer/puppeteer:24.0.0

USER root

WORKDIR /usr/src/app

COPY package*.json ./

RUN chown -R pptruser:pptruser /usr/src/app

USER pptruser

RUN npm install

COPY --chown=pptruser:pptruser . .

CMD ["npm", "run", "dev"]