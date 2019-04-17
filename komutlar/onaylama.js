const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Onaylı');
    if (message.channel.name !== 'verified') return message.reply('**verified** kanalına gitmek zorundasın!');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Hesabınız Onaylandı!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Hesabınız Zaten Onaylandı!')
        return message.channel.send((verifyEmbed));
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['onaylama',"onayla","onay"],
    permLevel: 0
}

exports.help = {
    name: 'onaylama',
    category: 'ayarlar',
    description: 'Hesabınızı sunucuda onaylar.',
    usage: 'n!onaylama'
}
//sonmeztv