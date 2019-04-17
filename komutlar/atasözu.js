const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Acele ile menzil alınmaz.**',
'**Acı söz insanı dininden çıkarır, tatlı söz yılanı deliğinden çıkarır.**',
'**Akıllı sır saklar; aptal sır verir.**', '**Baba oğluna bir bağ bağışlamış, oğul babaya bir salkım üzüm vermemiş.**',
'**Bağ dua değil, çapa dua ister.**',
'**Aleme cellat lazım; senin olman ne lazım?**',
'**At ölür meydan kalır, yiğit ölür şan kalır..**',
'**Ateş olmayan yerden duman çıkmaz..**',
'**Az kazanan çok kazanır, çok kazanan hiç kazanır..**',
'**Aç koyma hırsız olur, çok söyleme yüzsüz olur, çok değme arsız olur.**',
'**Bebeler birbirinden huy kapar, ayranlarına su katar.**',
'**Bu dünya iki kapılı handır, gelen bilmez giden bilmez.**',
'**Darlıkta dirlik olmaz.**',
'**Dağ dumansız insan hatasız olmaz.**',

];
var atasozuver = Math.floor(Math.random()*Random.length);
const atasozu= new Discord.RichEmbed()
.setDescription(`${Random[atasozuver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(atasozu)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atasözü',
description: 'Bot Tarafından Rasgele Atasözleri Gönderilir',
usage: 'atasözü'
};