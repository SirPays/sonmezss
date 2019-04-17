const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
if(message.author.id !== '520119952850681858' & message.author.id !== 'KENDİ IDNi YAZ') return message.channel.send('Bu Komutu Sadece Yapımcım Kullanabilir!')
  var premium = args[0]
var id = client.guilds.get(args[1])
if (!premium) return message.reply("Lütfen **aktif** ya da **deaktif Yazın!")
if (!id) return message.reply("Premium'un Aktif Edileceği Sunucunun ID sini Yazmalısın!")
  
  if (premium === 'aktif') {
 db.set(`pre_${id.id}`, "aktif")
  message.channel.send('Başarılı! ' + id.id + " ID sine Sahip Sunucu Artık Premium!")
  };

  if (premium === 'deaktif') {
    db.delete(`pre_${id.id}`)
  message.channel.send('Başarılı! ' + id.id + " ID sine Sahip Sunucu Artık Premium Değil!")
  };
  
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: 'premium',
    description: 'Premium aktifleştirir veya deaktifleştirir.',
    usage: 'premium [aktif/deaktif] [sunucu ID]'
};