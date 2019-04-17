module.exports.run = async (bot, message, args) => {
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Aratmak istediğin ismi veya nicki yaz!");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    message.channel.send(matches.map(u => u.tag));

    message.delete();

     }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kara"],
  permLevel: 0
};

module.exports.help = {
  name: 'kullanıcıara',
  description: 'Kullanıcı araması yaparsınız.',
  usage: 'kullanıcıara <isim>'
};
//XiR