const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
  
  let hayir = (client.emojis.find("name", "CARRno").toString())
  let evet = (client.emojis.find("name", "CARRyes").toString())

  if (!msg.member.hasPermission ("ADMINISTRATOR")) return msg.reply(`Bu Komutu Kullanmak İçin **Yönetici** İznine Sahip Olmalısın!`);

  let discoR = await db.fetch(`discorol_${msg.guild.id}`);
   setInterval(() => {
  msg.guild.roles.find('name', discoR).setColor("DEFAULT");
     }, 0)
msg.channel.send(`Disco Durduruldu!`);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['disko-durdur'],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'disco-durdur',
    description: 'Disco Durdurur!',
    usage: 'disco-durdur'
}