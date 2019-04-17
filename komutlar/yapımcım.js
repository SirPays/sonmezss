const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()
        .setDescription('')
        .setColor(0x00ffff)
        .addField("**》 Yapımcım 《**", `irfan#8937`)
        .setURL('https://www.facebook.com/irfanbaba42')
        .setImage('https://cdn.discordapp.com/avatars/441169716547944448/00c48981814dd04cf9cb8e9c54e194e2.png?size=2048')
        .setTitle("Facebook Ulaşmak İçin Tıkla!")


    return message.channel.sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yapımcım'],
    permLevel: 0
};

exports.help = {
    name: 'yapımcım',
    description: 'Botun Yapımcısını Gösterir',
    usage: 'yapımcım'
};
