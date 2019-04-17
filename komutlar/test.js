const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => 
{
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ayarlar.noPerms);

    let argsTTS = args.join(" ");
    if (argsTTS.length === 0)
    {
      message.channel.send(":x: Lütfen TTS formunda göndermek için bir mesaj girin.");
      return;
    }
    message.channel.send(argsTTS, {tts: true})
      .then(msg => {
        msg.delete();
      });
    message.channel.send(":white_check_mark: **" + argsTTS + "** sesli mesaj gönderildi")
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'test',
  description: 'Bot Alkışlar',
  usage: 'test'
};