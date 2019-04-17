const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
if (msg.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setDescription(`Doğru kullanım: \`v!yavaşmod [0/10]\``)
                .setColor("RANDOM")
                .setTimestamp() 
            msg.channel.send({embed})
            return
          }
if (limit > 10) {
    return msg.channel.sendEmbed(new Discord.RichEmbed().setDescription("Yavaş Mod limiti maksimum **10** saniye olabilir.").setColor("RANDOM"));
}
    msg.channel.sendEmbed(new Discord.RichEmbed().setDescription(`📥 **| Başarılı,** bu odada kullanıcılar \`${limit}\` saniye aralıklarla mesaj gönderebilecek.`).setColor("RANDOM"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.ayarlar.token}`
    },
})};


exports.conf = { // Özel ayarları belirtiyoruz.
	enabled: true, // Aktif mi değil mi? (true, false)
	guildOnly: true, // Sadece sunucuda mı kullanılsın? (true, false)
	aliases: [], // Sadece komutu değilde bunlarıda yazarsa bu işlemi gerçekleştir diyoruz.
	permLevel: 0,
	kategori: 'kullanıcı' // Yardım komutunda gözükecek kategoriyi belirtiyoruz.
}

exports.help = { // Ana ayarları belirtiyoruz.
	komut: 'yavaşmod', // Komutu belirtiyoruz.
	aciklama: 'Bu bir örnek komuttur.', // Yardımda gözüken açıklamayı belirtiyoruz.
	kullanim: 'özel' // Yardımda gözükecek kullanımı belirtiyoruz.
}
