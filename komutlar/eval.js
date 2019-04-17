const Discord = require("discord.js");

exports.run = async (client, message, args, color, prefix) => {
    if (message.author.id !== '520119952850681858' && message.author.id !== '309617463857905674') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval')
        .setColor('RANDOM')
        .addField(':inbox_tray: Giriş', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Giriş', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      const err = new Discord.RichEmbed()
      .setTitle('Hata oluştu!')
      .setDescription(`\`\`\`js\n${e}\n\`\`\``)
        .setColor('RANDOM')
        message.channel.send(err);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};