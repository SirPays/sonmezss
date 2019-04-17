const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Su Ver**")
        .setImage("https://i2.wp.com/hachikodotlife.com/wp-content/uploads/2018/03/muhabbet-kuc59fu-2.gif?resize=260%2C200&ssl=1")
        .setThumbnail("https://resmim.net/f/ckojv8.jpg?nocache")
        .setColor(0x00AE86)
        .addField("ѕσηмєzтν", "Çok Susamıştı", true)
        .addField("Ona Su Verdin", `
        Screw Artık Çok Mutlu❤:tada:
   
   `, true)

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'su', 
  description: 'BOTUN ISMI hakkında bilgi verir',
  usage: 'su'
};