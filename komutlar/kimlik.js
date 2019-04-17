const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var isimler = [
    "Gökhan",
    "Polat",
    "Yiğit",
    "Alper",
    "Alp",
    "Lale",
    "Mehmet",
    "Mert",
    "Abdulkadir",
    "İlker",
    "Yaşar",
    "Kıvanç",
    "Umut",
    "Burak",
    "Elif",
    "Ayşe",
    "Ahmet",
    "Abdullah",
    "Fatma"
        
    ]
    
    var soyadlar = [
    "Güler",
    "Çetin",
    "Kel",
    "Uzun",
    "Güçlü",
    "Demir",
    "Bakıroğlu",
    "Bakan",
    "Tatar",
    "Tertip",
    "Eren",
    "Polat",
    "Yenioğlu",
    "Esad",
    "Yalçın",
    "Er",
    "Faruk",
    "Baykut",
    "Berat"
    
    ]
    
    var tckimlik = [
    "112312435331231",
    "124122146324214",
    "352324512313643",
    "497896523454235",
    "547867664543554",
    "487573562142578",
    "104287653894657",
    "100427586357212",
    "145275245214522",
    "205437512267426",
    "405151210020213",
    "572151525161583",
    "465765276676574",
    "246556456454566",
    "243578924215644",
    "267584912377546",
    "248957316247578",
    "245876346565752",
    "457525635455454"
        ]
        var isim = isimler[Math.floor(Math.random() * isimler.length)]
        var soyad = soyadlar[Math.floor(Math.random() * soyadlar.length)]
        var tckimlik = tckimlik[Math.floor(Math.random() * tckimlik.length)]
        
        const kimlikembed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`İsim: \n ${isim} \n \nSoyadı: \n ${soyad} \n \nTC Kimlik NO: \n ${tckimlik} `)
        .setFooter(`${message.author.username} için bir kimlik oluşturuldu. Bu bilgiler rastgele atıldığı için bazen aynı şeyler gelebilir. Kimlik NO'ların hiçbiri biryerden alıntı değildir, random oluşmuş sayılardır.`)
        .setColor("RANDOM")
        return message.channel.sendEmbed(kimlikembed);
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kimlik"],
  permLevel: 0
};

module.exports.help = {
  name: 'kimlikoluştur',
  description: 'Rastgele kimlik oluşturur.',
  usage: 'kimlik'
};
//XiR