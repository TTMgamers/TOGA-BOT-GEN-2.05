let handler = function (m) {
  // this.sendContact(m.chat, '6283829386551', 'TOGA', m)
  conn.sendContact(m.chat, '6283829386551', 'TOGA', m)
  m.reply('wa.me/6283829386551')
}

handler.command = /^owner|creator$/i

module.exports = handler
