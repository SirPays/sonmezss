const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('Ping Değerim: **' + client.ping + '** ms');
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
