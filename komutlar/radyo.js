const Discord = require("discord.js");

exports.run = async (client, msg) => {

const radio = {
    "number1": "http://20723.live.streamtheworld.com/NUMBER1FM_SC?type=.mp3",
    "powerturk": "http://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio?/;stream.nsv",
    "power": "http://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio?/;stream.nsv",
    "metrofm": "http://17703.live.streamtheworld.com/METRO_FM_SC?type=.mp3",
    "fenomen": "http://listen.radyofenomen.com/fenomen/128/icecast.audio?/;stream.nsv",
    "bozkurtlarfm": "http://bozkurtlarfm.canliyayinda.com:4040/;stream.mp3",
    "fenomenfm": "http://fenomenoriental.listenfenomen.com/fenomenoriental/128/icecast.audio",
    "sonmeztv": "http://162.244.80.30:8122",

}

            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send('❎ | Lütfen bir **odaya gir!**')

            }
            let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();

      if (!args) return msg.channel.send('❎ | Bir **radyo seçin:** **fenomenfm** | **powerturk** | **powerturk** | **metrofm** | **fenomen** | **bozkurtlarfm**| **damarfm**')

        if(!radio[args]) return msg.channel.send('❎ | Lütfen yandaki Radyolardan **birini seç:** **number1** | **powerturk** | **fenomenfm** | **metrofm** | **fenomen** | **bozkurtlarfm** | **damarfm**')

    msg.member.voiceChannel.join().then(connection => {

    require('http').get(radio[args], (res) => {

            connection.playStream(res);

     let embed = new Discord.RichEmbed()
        .setAuthor("Radyo Çalınıyor", `https://images-ext-1.discordapp.net/external/0O8M-0Q93aKVqx6tonQInp6W7QRDjlLkH1E6mHMaCeM/%3Fv%3D1/https/cdn.discordapp.com/emojis/475822981277286400.gif`)
        .setColor("#FFB900")
        .addField("RADYO", args)
        .setFooter(msg.author.username, msg.author.avatarURL);

     msg.channel.send(embed);

          });

  });
  
  client.on('message', msg => {
  if (msg.author.id === client.user.id) return
  if (msg.content.startsWith('n!kapat')) {
    
    if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('#C34E4E')
    .setDescription('❎ | Sesli bir kanalda değilsin!'));
    
    msg.member.voiceChannel.leave()
    
}});

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
};

exports.help = {
    name : "radyo",
    usage: "radyo",
    description: "radyo"
};