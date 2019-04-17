const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('`Bot-Ekle` komutu sunucularda kullanılabilir!')
return message.author.sendEmbed(ozelmesajuyari); }
let guild = message.guild
let mesaj = args.slice(0).join(' ');
  console.log("s!botekle komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
  if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor(0x36393E).setDescription('Bot Ekletirmek İçin Botun Davet Linkini Atman Gerek!'));
  const tavsiye1 = new Discord.RichEmbed()
      .setColor(0x36393E)
    .setDescription(message.author.username + ', Botunuz İncelenecektir!')
  message.channel.send(tavsiye1);
const tavsiye = new Discord.RichEmbed()
      .setColor(0x36393E)
  .addField('__Kişi__', '\n' + message.author.username + '')
  .addField('\n\nBotun Davet linki\n\n', mesaj)
  .addField('\n\nBota Bakacak Arkadaş Bota Bakıyorum Yazarak bota baksınlar böylece bir botu 2 defa onaylamayalım veya reddetmeyelim' + + '')
return client.channels.get("529357282262122507").send(tavsiye);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-ekle',
  description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
  usage: 'tavsiye [tavsiye]'
};