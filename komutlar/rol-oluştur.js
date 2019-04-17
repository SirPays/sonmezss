const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Rol oluştur;').setDescription(message.author.tag + ', bu komutu kullanmak için gerekli izinlere sahip değilsin.').setFooter('TheRenk', client.user.avatarURL).setTimestamp());
    if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Rol oluştur;').setDescription(message.author.tag + ', bu komutu direkt mesajda kullanamazsın.').setFooter('TheRenk', client.user.avatarURL).setTimestamp()); }
    const sayMessage = args.join(' ');
    if (sayMessage.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Rol oluştur;').setDescription(message.author.tag + ', kullanım: n!rol-oluştur <mesaj>.').setFooter('ѕσηмєzтν ', client.user.avatarURL).setTimestamp());
    message.guild.createRole({
                    name: sayMessage,
                    color: "RANDOM",
                    permission:[]
            });
    const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('Rol oluşturuldu;')
     .setDescription(`Başarıyla rol oluşturdum white_check_mark:`)
     .setFooter('ѕσηмєzтν')
     .setTimestamp()
     message.channel.send(embed);
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['roluştur', 'rolekle',"rolcreated","rolo"],
  permLevel: 2
};

exports.help = {
  name: 'rol-olustur',
  description: 'Yeni rol oluşturursunuz.',
  usage: 'rol-oluştur'
};
//XiR