const Discord = require('discord.js')

exports.run = async (client,message,args) => {
        const embed = new Discord.RichEmbed()
                 .addField(`Bağış Yapacağınız Hesap`)
                 .addField(`BANKA ADI: ENCARD QNB FINANS`)
                 .addField(`ALICI ADI: İRFAN SÖNMEZ`)
                .setDescription(`TR İBAN TR70 0011 1000 0000 0073 3731 52`)
                .setTimestamp()
        message.channel.send({embed})
}


exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['bağışyap','bağış'], 
    permLevel: 0,
    kategori: 'kullanıcı' 
}

exports.help = {
    komut: 'bağış', 
    aciklama: 'Bu bir bağış komuttur.', 
    kullanim: 'bagış'
}
//XiR