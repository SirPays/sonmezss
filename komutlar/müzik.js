const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`Müzik`, 'n!çal: İstediğin şarkıyı çalar.\n n!durdur: Müziği durdurur.\n n!devam: Müziği devam ettirir.\n n!kuyruk: Kuyruğu söyler\n n!geç: Geçerli çalınan müziği geçer\n n!ses: Belirlediğiniz değerde sesi açar.\n n!stop: Müziği kapatır.')
  .setFooter(`ѕσηмєzтν - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Oralet Bildirme: n!müzik komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(müzik);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'müzik',
    description: 'müzik',
    usage: 'müzik'
  };