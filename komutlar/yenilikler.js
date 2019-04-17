const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
const ayarlar = require('../ayarlar.json');

const { stripUndents } = require("common-tags")
exports.run = (client, message) => {
                    if (message.guild) {
			var embed = new Discord.RichEmbed()
			.setTitle('Yenilikler')
			.setDescription(stripIndents`
			**Sürüm 1.0.1**
			> radyo komutu eklendi. _kullanmak için \`n!radyo\`_
      > RolVer komutu eklendi. _kullanmak için \`n!rolver\`_
			> Roller komutu eklendi. _kullanmak için \`n!roller\`_
			> düello komutu eklendi. _kullanmak için \`n!düello\`_
      Müzik Komutları görmek için \`n!müzik\`
			`)
			.setColor('RED');
			return message.channel.send({embed});
		}

		var embed = new Discord.RichEmbed()
		.setTitle('Yenilikler')
		.setDescription(stripIndents`
			**Sürüm 1.0.1**
			
			
			> Sustur komutu eklendi. _kullanmak için \`n!sustur\`_
			> SusturAç komutu eklendi. _kullanmak için \`n!susturaç\`_
		  > Rol-Ver komutu eklendi. _kullanmak için \`n!rol-ver\`_
			> Roller komutu eklendi. _kullanmak için \`n!roller\`_
			Komutları görmek için \`n!yardım\`
		`)
		.setColor('RED');

		return message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};