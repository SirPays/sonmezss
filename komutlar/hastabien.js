const Discord = require('discord.js');
const snekfetch = require("snekfetch");
exports.run = async (client, message, args) => {
  if (!args[0]) { 
    return message.channel.send(":x: Hastebin'e ne göndermek istersin?") }
  snekfetch.post("https://hastebin.com/documents").send(args.slice(0).join(" ")).then(body => {
    message.channel.send(":white_check_mark: Yazınızı Hastebine Gönderdim: https://hastebin.com/" + body.body.key);
       });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hastebin'],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  description: 'İstediğiniz Yazıyı Hastebine Yükler.',
  usage: 'hastebin'
};