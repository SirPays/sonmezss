const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor("**OLAY VAR DEDİLER GELDİK KARDEŞ HAYIRDIR** " + message.author.username  )
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`http://i.milliyet.com.tr/YeniAnaResim/2012/03/02/fft99_mf2054235.Jpeg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["olayvar , olay-var"],
  permLevel: 0
};

exports.help = {
  name: 'olay',
  description: 'Çay İçer.',
  usage: 'çayiç'
};
