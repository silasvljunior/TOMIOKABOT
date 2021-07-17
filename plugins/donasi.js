let handler = async m => m.reply(`
╭─〘 DOAÇÕES 〙
│ • TIO TOMIOKA [5544998220867]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
