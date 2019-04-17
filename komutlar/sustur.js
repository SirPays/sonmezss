const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
db.fetch(`srol_${message.guild.id}`).then(async otorol => {
    var rol = message.guild.roles.find(e => e.name === `Kaizen | Susturma`);
    var etiket = message.mentions.members.first()
    if (!etiket) return message.channel.send('Kimi susturmak istersin?')
    if(message.member.roles.has(rol)) return message.channel.send("Kişi Zaten Susturulmuş");
    if(!rol){
        rol = await message.guild.createRole({
        name: `мɒяıo | Susturma`,
        color: "RANDOM" 
        })
    }

    message.guild.channels.forEach((channel, id) => {
         channel.overwritePermissions(rol, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK: false
            });
          });
   
    etiket.addRole(rol)
    
    await etiket.addRole(rol)
    message.channel.send(`Başarıyla ${etiket.displayName} Kişisini Susturdum :white_check_mark:`)
 })
  }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['sustur'],
 permLevel: 0
};

exports.help = {
 name: 'mute',
 description: '',
 usage: ''
};