const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Bir ID YAZ')
  let kullanıcı = message.mentions.users.first()
  let idi = client.users.get(args[0]);
  
  if(args[0])
  db.set(`karaliste_${args[0]}`, 'pasif')
      message.channel.send('✅ | Kullanıcı Karalisteden Alındı')
  /*    message.channel.send(new Discord.RichEmbed()
                          .addField('Kullanıcı Adı', idi.user.username)
                          .addField('Kullanıcı Tagı', idi.user.discriminator)*/
                        
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karalistekaldır'],
  permLevel: 4
};
exports.help = {
  name: 'karalistek',
  description: '[Admin Komutu]',
  usage: 'reklam-engelleme'
};