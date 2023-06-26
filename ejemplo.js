import { chromium } from "playwright"

// Usamos headless para que no se abra el navegador
const browser = await chromium.launch({ headless:true })

// Creamos una nueva página
const page = await browser.newPage()

// Vamos a la página que nos interesa
await page.goto('https://github.com/trending/javascript')

// Obtenemos todos los elementos dentro de la clase .Box-row
const repositorios = await page.$$eval('.Box-row', (rows) => {
    rows.map((row) => {
        const title = row.querySelector('h2').innerText.trim()
        const link = row.querySelector('h2 a').getAttribute('href')
        return { title , link }
    })
})

console.log('¿Porqué es undefined?:', repositorios)
await browser.close();