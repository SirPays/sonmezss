const Discord = require('discord.js');

module.exports.run = (bot, message , args) => {
      message.channel.startTyping();
   const embed = new Discord.RichEmbed()
  .setColor("#36393F")
   .setDescription('Yazıyor Başladı')
  return message.channel.send(embed);
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yaziyor',
  description: 'rolinfo | Rol hakkında bilgi verir.',
  usage: 'yaziyor'
};