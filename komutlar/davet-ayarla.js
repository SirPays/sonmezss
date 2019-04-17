const Discord = require('discord.js');
const db = require('quick.db');

exports.run =async (client, message, params, args) => {
   await db.fetch(`karaliste_${message.author.id}`).then(async i => {
    
  
     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için **yeterli izne sahip değilsin!**')
     let logkanali = message.mentions.channels.first();
     if (!logkanali) return message.channel.send('Davet kanalı ayarlamak için **bir kanal etiketlemeniz gerekli!** `n!davet-kanal-ayarla #kanal`')
     db.set(`davetChannel_${message.guild.id}`, message.mentions.channels.first().id).then(i => {
        message.channel.send(`Davet kanalı, <#${i}> olarak ayarlandı.`)    
    })   
    }
     
  
                                                         )   
    }
     
   



exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3
};

exports.help = {
 name: 'davet-kanalı-ayarla',
 description: '',
 usage: ''
};