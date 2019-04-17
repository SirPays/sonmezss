const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanmak için izniniz yoktur!");
if(!args[0]) return message.channel.send("**Lütfen silinecek mesaj adetini belirtin.**");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet mesajı sildim. ✅`).then(msg => msg.delete(5000));
})
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'temizle',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'temizle'
};