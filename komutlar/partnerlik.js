const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("BEŞİKTAŞ Bot ! \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .addField('**1.** kural 1')
  .addField('**2.** kural 2')
  .addField('**3.** kural 3')
  .addField('**4.** kural 4')
  .addField('**5.** kural 5')
  .addField('**YUKARDAKI KURALLARA UYULMADIGI TAKDIRDE PARTNERLIK IPTAL OLUR!!!**',)
  .setFooter("♥ 2018 ♥ BEŞİKTAŞ Bot ♥", " ")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şart',
  description: 'Botun pingini gösterir.',
  usage: 'şart'
};