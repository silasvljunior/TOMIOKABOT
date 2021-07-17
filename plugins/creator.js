let handler = function (m) {
  this.sendContact(m.chat, '6554498220867', 'Nurutomo', m)
}
handler.help = ['owner', 'creator', 'dono']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
