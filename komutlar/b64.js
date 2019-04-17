const base64 = require("js-base64").Base64;

module.exports.run = async (bot, message, args) => {
    const b64Decoded = base64.decode(args.join(" "));
    message.channel.send(`\`\`\`\n${b64Decoded}\`\`\``);
}
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'b64',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'b64'
};