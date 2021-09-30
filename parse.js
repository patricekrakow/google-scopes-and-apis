const request = require('request')
const cheerio = require('cheerio')

request('https://developers.google.com/identity/protocols/oauth2/scopes', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(`"Google API", "Google Scope"`)
    const $ = cheerio.load(html)
    $('section[aria-labelledby]').each((sectionIndex, sectionElement) => {
      const apiName = $(sectionElement).find('h2').text()
      $(sectionElement).find('table > tbody > tr > td:first-child').each((tdIndex, tdElement) => {
        const apiScopes = $(tdElement).text()
        console.log(`"${apiName}", ${apiScopes}`)
      })
    })
  }
})
