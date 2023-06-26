import { chromium } from "playwright"

const browser = await chromium.launch({ headless:false })

const page = await browser.newPage()
console.log('adasdf')
await page.goto('https://github.com/trending/javascript')

const carteleraSpain = await page.$$eval('.Box-row', (movies) => {
    movies.map((film) => {
        const title = film.querySelector('h2').innerText.trim();
        console.log(title)
        return { title }
    })
})

console.log('será undefined aquí:', carteleraSpain)
//await browser.close();