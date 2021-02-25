let handler = async m => m.reply(`
╭─「 Donasi Pulsa / DANA」
│ • Axis [ 081233107475 ]
╰──── lebih baik ga usah :v cuman butuh paket kok aku xixixi, CMIIW
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
