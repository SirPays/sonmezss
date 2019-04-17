const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  if (!args[0]) return message.channel.send('Bir dil seçmelisin? Örneğin: `!dil tr`')
  
  if (args[0] == 'tr') {
    db.set(`lang_${message.guild.id}`, 'tr').then(lang => {
      message.channel.send('Bu sunucuda dil sistemi **TR** olarak ayarlandı!')
    })
  }
  if (args[0] == 'en') {
    db.set(`lang_${message.guild.id}`, 'en').then(lang => {
      message.channel.send('The language of the bot is set to **EN** on this server!')
   })
  }
   if (args[0] == 'sıfırla') {
    db.set(`lang_${message.guild.id}`, 'tr').then(lang => {
      message.channel.send('Bu sunucuda dil sistemi sıfırlandı!')
   })
  }
 
    }
   

   



                                                  
                                                  
  
     
    


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['language'],
  permLevel: 0
};

exports.help = {
  name: 'dil-ayarla',
  description: '',
  usage: ''
};
