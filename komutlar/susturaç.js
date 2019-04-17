const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
db.fetch(`srol_${message.guild.id}`).then(async otorol => {

    var rol = message.guild.roles.find(e => e.name === `мɒяıo | Susturma`,);
    var etiket = message.mentions.members.first()
     if (!etiket) return message.channel.send('Kimin susturmasını kaldırmak istersin?')

    etiket.removeRole(rol)
    
    await etiket.removeRole(rol)
    message.channel.send(`Başarıyla ${etiket.displayName} Kişisinin Susturmasını Kaldırdım :white_check_mark:`)
 })
  }
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['sustur-kaldır'],
 permLevel: 3
};

exports.help = {
 name: 'unmute',
 description: '',
 usage: ''
};