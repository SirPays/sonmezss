const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Bir ID YAZ')
  
  if(args[0] < 18) return message.channel.send('BIR ID YAZMALISIN')
  if(args[0])
  db.set(`karaliste_${args[0]}`, 'aktif')
      message.channel.send(new Discord.RichEmbed()
                           .setDescription('✅ | Kullanıcı Karalisteye Alındı!')
                           .setColor('RANDOM')
                          )
      console.log(`${args[0]} id li kullanıcı Karalisteye alındı`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karaliste'],
  permLevel: 4
};
exports.help = {
  name: 'blacklist',
  description: '[Admin Komutu]',
  usage: 'reklam-engelleme'
};