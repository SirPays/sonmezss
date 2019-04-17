const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
message.delete();
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send( "**Üyeleri At** yetkisine sahip değilsin!");
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send('Kullanıcı giriniz.')
    if(kUser.id === bot.user.id) return message.channel.send('Botu **Atamazsın!**'); 
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send('Sebep giriniz...')
    if(kUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Atmak istediğin kişi **Üyeleri At** yetkisine sahip **Atamam...**");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Atma")
    .setColor("#bc0000")
    .addField("Atılan Kişi", `${kUser} ID'si ${kUser.id}`)
    .addField("Yetkili", `<@${message.author.id}> ID'si ${message.author.id}`)
    .addField("Sebep", kReason);

  
  
  
  
    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("`mod-log` kanalını bulamıyorum.");

    message.guild.member(kUser).kick(kReason);
    incidentchannel.send(kickEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi atar.',
  usage: 'kick [kullanıcı] [sebep]'
};