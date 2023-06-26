// MIDUDEV WEB SCRAPPING EXAMPLE
import { chromium } from "playwright"
//const chromium = require('playwright');

const browser = await chromium.launch({ headless:false })

const page = await browser.newPage()
console.log('adasdf')
await page.goto('https://www.filmaffinity.com/es/cat_new_th_es.html') // URL para extraer búsquedas por título: https://www.filmaffinity.com/es/search.php?stype=title&stext=algo
let prueba = []

const carteleraSpain = await page.$$eval('.movie-poster', (movies) => {
    console.log('dentro...')
    movies.map((film) => {
        const title = film.querySelector('a').getAttribute('title').trim();
        const link = film.querySelector('a').getAttribute('href').trim();
        const img = film.querySelector('img').getAttribute('src').trim();
        console.log(`iterando film... ${film}`)
        prueba.push({title, img, link})
        console.log(`estado del array prueba: ${prueba}` )
        return { title, img, link }
    })
    console.log(`fin films: ${movies}`)
})

console.log('será undefined aquí:', carteleraSpain)
await browser.close();