global.DeveloperMode = 'false' //true Or false
global.owner = ['6283829386551'] // Put your number here
global.mods = ['6282331033919','6285795431803','6282164659362']  // Want some help?
global.prems = ['6283929386551'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'belilah'
}

// Sticker WM
global.packname = 'TOGA BOTZ'
global.author ='+6283829386551'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
