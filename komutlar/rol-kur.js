const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "520119952850681858") {
        
        message.channel.send(':1234: **ѕσηмєzтν Botu için gerekli şeyler kuruluyor...**');
        
       message.guild.createRole({ name: 'Kurucu', position: 50, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
       
      message.guild.createRole({ name: 'Yetkili', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
      
      message.guild.createRole({ name: 'Admin', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
        
      message.guild.createRole({ name: '❌ＫＡＹＩＴＬＩ ＵＹＥ❌', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'GREEN'})
      
      message.guild.createRole({ name: '❌ＫＡＹＩＴＳＩＺ ＵＹＥ❌', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'RED'})
        
     message.guild.createRole({ name: 'BOT', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})         
        
        message.channel.send(':white_check_mark: **Roller Kuruldu**');
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu şimdilik kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'roller1',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'roller1'
};