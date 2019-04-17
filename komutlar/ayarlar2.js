const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
const fs = require('fs');
let girisCikis = JSON.parse(fs.readFileSync("././jsonlar/gc.json", "utf8"));
let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
let girisM = JSON.parse(fs.readFileSync("././jsonlar/girisM.json", "utf8"));
let cikisM = JSON.parse(fs.readFileSync("././jsonlar/cikisM.json", "utf8"));
let mod = JSON.parse(fs.readFileSync("././jsonlar/mLog.json", "utf8"));
let sRol = JSON.parse(fs.readFileSync("././jsonlar/sRol.json", "utf8"));

exports.run = (client, message) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`» ${message.guild.name} Sunucu Ayarları «`, `https://images-ext-2.discordapp.net/external/ujBwHK3NkvSNyffbh50uDXaOIG6M3ED77fYEsn33Sl4/http/cdn.onlinewebfonts.com/svg/download_136247.png`)
  .addField("Giriş Çıkış Kanalı", girisCikis[message.guild.id] ? `<#${girisCikis[message.guild.id].girisCikis}>` : `Ayarlanmamış`, true)
  .addField("Moderasyon Kayıt Kanalı", mod[message.guild.id] ? `<#${mod[message.guild.id].modlog}>` : `Ayarlanmamış`, true)
  .addField("Link Engelleme Sistemi", linkEngel[message.guild.id] ? "Açık" : "Kapalı", true)
  .addField("Küfür Engelleme Sistemi", küfürEngel[message.guild.id] ? "Açık" : "Kapalı" ,true)
  .addField("Susturma Rolü", sRol[message.guild.id] ? `<@${sRol[message.guild.id].sRol.id}>` : `Ayarlanmamış`, false)
  .addField("Giriş Mesajı", girisM[message.guild.id] ? `**Mesaj:** \n\`\`\`${girisM[message.guild.id].girisM}\`\`\`` : `Ayarlanmamış`)
  .addField("Çıkış Mesajı", cikisM[message.guild.id] ? `**Mesaj:** \n\`\`\`${cikisM[message.guild.id].cikisM}\`\`\`` : `Ayarlanmamış`)
  message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: 'ayarlar',
    category: 'ayarlar',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 's!ayarlar'
  };