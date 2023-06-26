//import { chromium } from "playwright";
const chromium = require('playwright');

const browser = await chromium.launch({ headless:true });

const page = await browser.newPage();

await page.goto('https://www.filmaffinity.com/es/cat_new_th_es.html');

const carteleraEs = await page.$$eval('.movie-poster', (movies) => {
    movies.map((film) => {
        const title = film.querySelector('a').getAttribute('title').trim();
        const link = film.querySelector('a').getAttribute('href').trim();
        const img = film.querySelector('img').getAttribute('src').trim();

        return { title, img, link}
    })


});

console.log(carteleraEs);
await browser.close();