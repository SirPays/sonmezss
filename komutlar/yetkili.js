const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("YETKİLİ KOMUTLARI:",`
n!ban:^Belirlediğiniz bir kullanıcıyı sunucudan kalıcı olarak atarsınız.^
n!kur:^Bot için gerekli odaları kurar.^
n!oylama:^Standart bir oylama yapmanızı sağlar.^
n!reboot:^Botu yeniden yapmanızı sağlar.^
n!sunucular:^Botun bulunduğu sunucuları gösterir.^
n!tavsiye:^Bot'a tavsiye yollamanızı sağlar.^
n!yaz:^Bot üzerinden yazı yazmanızı sağlar.^
n!kilit:^Kanalı belirli bir süre kilitlemenizi sağlar.^
* örn: n!ban <sebep>
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};