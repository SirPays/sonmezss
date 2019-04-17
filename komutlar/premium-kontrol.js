const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let pre = await db.fetch(`pre_${message.guild.id}`)
  let preYazi;
  if (pre == null) preYazi = 'Aktif Değil!'
  if (pre == 'aktif') preYazi = 'Aktif!'
  if (pre == 'deaktif') preYazi = 'Deaktif!'
  const embed = new Discord.RichEmbed()
  .setTitle('Premium Kontrol')
   .setColor(0x36393E)
  .setDescription(preYazi)
  message.channel.send(embed)
  }
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'premium-kontrol',
    description: '',
    usage: ''
}