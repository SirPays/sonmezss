const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    const Discord = require("discord.js");
       var flip = Math.floor(Math.random() * 2 + 1);
       if (flip === 1) {
    let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
   .setImage('https://cdn.discordapp.com/attachments/358322476167462914/366966782252023808/1503472_o8efa.png')
   msg.channel.send(embed);
 }
       
       else {
    let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
   .setImage('https://cdn.discordapp.com/attachments/358322476167462914/366966718486282240/1TL_reverse.png')
   msg.channel.send(embed);
 } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı tura oynarsınız!',
  usage: 'yazı-tura'
};