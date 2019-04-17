const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const fs = require('fs');
var dispatcher  = null;
const http = require('http');
const express = require('express');
require('./util/eventLoader')(client);
const YouTube = require('simple-youtube-api');
const path = require('path');
const ffmpeg = require('ffmpeg-binaries');
const ytdl = require('ytdl-core');
const canvas = require('canvas');
const youtube = new YouTube("AIzaSyC2DG1Ilg9WJ8s7_05swukrLAdpeV7_K5U");
const db = require('quick.db');
var musicStream = ytdl( 'https://www.youtube.com/watch?v=Y75Km7dlt94');
global.queue = new Map()

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === `${ozelkomutYazi}`) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});




client.on("message", message => {
    const dmchannel = client.channels.find("name", "dm-log");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Gönderen: ${message.author.tag}`,
            description: `Bota Özelden Gönderilen DM: ${message.content}`
        }})
    }
});



  
  client.on('message', msg => {  
   if (msg.content.toLowerCase() === 'sa') {
      msg.reply('**VE Aleyküm selam! ,  Hoş Geldin :rose:**');
      msg.react("??")
      msg.react("??")
	}
  
  
    if (msg.content.toLowerCase() === prefix + 'izmirmarşı') {
	msg.channel.sendMessage('-------------------------------------');
    msg.channel.sendMessage('İzmirin dağlarında çiçekler açar. ');
	msg.channel.sendMessage('Altın güneş orda sırmalar saçar. ');
	    msg.channel.sendMessage('Bozulmuş düşmanlar yel gibi kaçar. ');
		    msg.channel.sendMessage('Yaşa Mustafa Kemal Paşa,yaşa ');
			    msg.channel.sendMessage('Adın yazılacak mücevher taşa. ');
				    msg.channel.sendMessage('-------------------------------------');
					    msg.channel.sendMessage('İzmir dağlarına bomba koydular ');
						    msg.channel.sendMessage('Türkün sancağını öne koydular ');
							    msg.channel.sendMessage('Şanlı zaferlerle düşmanı boğdular. ');
								    msg.channel.sendMessage('Kader böyle imiş ey garip ana ');
									    msg.channel.sendMessage('Kanım feda olsun güzel vatana. ');
										    msg.channel.sendMessage('-------------------------------------');
											    msg.channel.sendMessage('İzmirin dağlarında oturdum kaldım ');
												    msg.channel.sendMessage('Şehit olanları deftere yazdim. ');
													    msg.channel.sendMessage('Öksüz yavruları bağrıma bastım ');
														    msg.channel.sendMessage('Kader böyle imiş ey garip ana ');
															    msg.channel.sendMessage('Kanim feda olsun güzel vatana ');
																    msg.channel.sendMessage('-------------------------------------');
																	    msg.channel.sendMessage('Türk oğluyum ben ölmek isterim. ');
																		    msg.channel.sendMessage('Toprak diken olsa yatağım yerim ');
																			    msg.channel.sendMessage('Allahından utansın dönenler geri ');
																				    msg.channel.sendMessage('Yaşa Mustafa Kemal Paşa,yaşa ');
																					    msg.channel.sendMessage('Adın yazılacak mücevher taşa.');
																						    msg.channel.sendMessage('-------------------------------------');						
																							}


	if (msg.content.toLowerCase() === prefix + 'istiklalmarşı') {
	msg.channel.sendMessage('-------------------------------------');
    msg.channel.sendMessage('Korkma, sönmez bu şafaklarda yüzen al sancak;');
	msg.channel.sendMessage('Sönmeden yurdumun üstünde tüten en son ocak.');
	    msg.channel.sendMessage('O benim milletimin yıldızıdır, parlayacak;');
		    msg.channel.sendMessage('O benimdir, o benim milletimindir ancak.');
				    msg.channel.sendMessage('-------------------------------------');
					    msg.channel.sendMessage('Çatma, kurban olayım, çehrene ey nazlı hilal!');
						    msg.channel.sendMessage('Kahraman ırkıma bir gül... Ne bu şiddet, bu celal?');
							    msg.channel.sendMessage('Sana olmaz dökülen kanlarımız sonra helal;');
								    msg.channel.sendMessage('Hakkıdır, Hakka tapan, milletimin istiklal.');
										    msg.channel.sendMessage('-------------------------------------');
                           }
  
          if (msg.content.toLowerCase() === prefix + 'gif')  {
  	if (Math.floor((Math.random() * 13) + 1) === 1) {
   		msg.channel.sendMessage('https://media.giphy.com/media/1TSUKOv4k56aIryKAP/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 2) {
   		msg.channel.sendMessage('https://media.giphy.com/media/ASzK5wWjMtc6A/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 3) {
   		msg.channel.sendMessage('https://media.giphy.com/media/E9oadOOmD27jG/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 4) {
   		msg.channel.sendMessage('https://media.giphy.com/media/O1GhSbro4z4Dm/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 5) {
   		msg.channel.sendMessage('https://media.giphy.com/media/ASzK5wWjMtc6A/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 6) {
   		msg.channel.sendMessage('https://media.giphy.com/media/E9oadOOmD27jG/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 7) {
   		msg.channel.sendMessage('https://media.giphy.com/media/O1GhSbro4z4Dm/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 8) {
   		msg.channel.sendMessage('https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 9) {
   		msg.channel.sendMessage('https://media.giphy.com/media/w60oAqglSRa1icDwO1/giphy.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 10) {
   		msg.channel.sendMessage('https://media.giphy.com/media/WFEGOIIrj6SY0/giphy.gif');
   }else if (Math.floor((Math.random() * 13) + 1) === 11) {
   		msg.channel.sendMessage('https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif');
	}else if (Math.floor((Math.random() * 13) + 1) === 12) {
   		msg.channel.sendMessage('https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif');
	}else if (Math.floor((Math.random() * 13) + 1) === 13) {
   		msg.channel.sendMessage('https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif');
   }
  }
  
          if (msg.content.toLowerCase() === prefix + 'pokemon') {
  	if (Math.floor((Math.random() * 13) + 1) === 1) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0100.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 2) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0095.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 3) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0007.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 4) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0102.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 5) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0092.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 6) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0081.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 7) {
   		msg.reply('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0082.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 8) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0073.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 9) {
   		msg.reply('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0039.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 10) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0017.gif');
   }else if (Math.floor((Math.random() * 13) + 1) === 11) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0040.gif');
	}else if (Math.floor((Math.random() * 13) + 1) === 12) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0021.gif');
	}else if (Math.floor((Math.random() * 13) + 1) === 13) {
   		msg.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0009.gif');
   }
  }
  
          if (msg.content.toLowerCase() === prefix + 'zarat') {
  	if (Math.floor((Math.random() * 13) + 1) === 1) {
   		msg.channel.sendMessage('??1');
   	}else if (Math.floor((Math.random() * 13) + 1) === 2) {
   		msg.channel.sendMessage('??2');
   	}else if (Math.floor((Math.random() * 13) + 1) === 3) {
   		msg.channel.sendMessage('??3');
   	}else if (Math.floor((Math.random() * 13) + 1) === 4) {
   		msg.channel.sendMessage('??4');
   	}else if (Math.floor((Math.random() * 13) + 1) === 5) {
   		msg.channel.sendMessage('??5');
   	}else if (Math.floor((Math.random() * 13) + 1) === 6) {
   		msg.channel.sendMessage('??6');
   	}else if (Math.floor((Math.random() * 13) + 1) === 7) {
   		msg.channel.sendMessage('??6');
   	}else if (Math.floor((Math.random() * 13) + 1) === 8) {
   		msg.channel.sendMessage('??5');
   	}else if (Math.floor((Math.random() * 13) + 1) === 9) {
   		msg.channel.sendMessage('??-4');
   	}else if (Math.floor((Math.random() * 13) + 1) === 10) {
   		msg.channel.sendMessage('??3');
   }else if (Math.floor((Math.random() * 13) + 1) === 11) {
   		msg.channel.sendMessage('??2');
	}else if (Math.floor((Math.random() * 13) + 1) === 12) {
   		msg.channel.sendMessage('??1');
	}else if (Math.floor((Math.random() * 13) + 1) === 13) {
   		msg.channel.sendMessage('??1');
   }
  }
            if (msg.content.toLowerCase() === prefix + 'dolar') {
    msg.channel.sendMessage(' http://bigpara.hurriyet.com.tr/doviz/dolar/ ');
  }
  
              if (msg.content.toLowerCase() === prefix + 'çizgi') {
    msg.channel.sendMessage('--------------------------------------------------------------------------------------------------------');
  }
});

 client.on('message', async message => { 
  if (message.content.toLowerCase() === prefix + 'davetim') {
   /* invites.then(function (a) {
            console.log(a.filter(invite => !invite.maxAge).first().toString());
        }); */
        try {
            const invites = await message.guild.fetchInvites();
            message.author.send(invites.filter(invite => !invite.maxAge).first().toString());
        } catch(err){
            message.delete();
            message.author.send("Hiç bir kişiyi davet etmemişsin!")
        }
    }
});

client.on( 'message', function( msg ) {
	/**
	 * Message starts with command prefix.
	 */
	if ( msg.content.startsWith( prefix ) ) {
		var message = msg.content.slice( prefix.length );
		var command = message.match( /(^[^ ]+)/ )[ 1 ];

		switch ( command ) {
			/**
			 * !join - Joins the users voice channel.
			 */
			case 'join' :
				var voiceChannel = msg.member.voiceChannel;

				if ( typeof voiceChannel == 'undefined' ) {
					msg.reply( `:thinking: Sana katılmam için ses kanalında olman gerekiyor.` );
				} else {
					connectToVoice( msg, voiceChannel );
				}

				break;
			
			case 'leave' :
				var voiceConnection = msg.guild.voiceConnection;

				if ( voiceConnection ) {
					voiceConnection.disconnect();
					msg.reply( `:wave: p!leave komutunu kullandın!` );
				} else {
					msg.reply( `:thinking: Şu anda bir ses kanalında değilim.` );
				}

				break;
		
			default:
				break;
		}
	}
} );

function connectToVoice( msg, voiceChannel ) {
	voiceChannel.join().then( function( connection ) {
		dispatcher = connection.playStream( musicStream, { volume: 10 } );
		msg.reply( `:white_check_mark: Joined ${ msg.member.voiceChannel.name }.` );
	} ).catch( function( err ) {
		console.log( err );
	} );
}


client.on('guildCreate', guild => {
    let channel = client.channels.get("531866120555069450")
        const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`GIRIS YAPTIM`)
        .setThumbnail(guild.iconURL)
        .addField("Sunucu", guild.name)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });
client.on('guildDelete', guild => {
    let channel = client.channels.get("531866416417210389")
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`BENI ATTILAR`)
        .setThumbnail(guild.iconURL)
        .addField("Sunucu", guild.name)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "stattemizle" ||command === "paneltemizle") {
  if (!message.guild.channels.find(channel => channel.name === "Sonmeztv | Sunucu İstatistik")) return message.channel.send(" İstatistik ayarlanmamış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      const a = message.guild.channels.find(channel => channel.name === "Sonmeztv | Sunucu İstatistik").delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Üye sayısı: ${message.guild.memberCount}`).delete()
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`).delete()
      if(!c) return console.log("guildStatsBot")
      const d = message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
      message.channel.send(" Kanallar temizlendi.")
    }
  if (command === "statayarla" ||command === "panelayarla") {
  if (message.guild.channels.find(channel => channel.name === "Sonmeztv | Sunucu İstatistik")) return message.channel.send(" Zaten istatistik ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
  message.channel.send(`Kategori ve kanal kurulumu başlatılsın mı? başlatılacak ise **yes** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'yes', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Sonmeztv | Sunucu İstatistik', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT'],
  deny: ['VIEW_CHANNEL']
}]);

 message.guild.createChannel(`Üye sayısı: ${message.guild.memberCount}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "ѕσηмєzтν | Sunucu İstatistik")));
 message.guild.createChannel(`Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "ѕσηмєzтν | Sunucu İstatistik")));
message.guild.createChannel(`Kanal sayısı: ${message.guild.channels.size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "ѕσηмєzтν | Sunucu İstatistik")));
  message.channel.send(" Sunucu paneli ayarlandı!")
        })
}
});


client.on("message", async msg => {
  
 if (msg.channel.type === "dm") return;
 if(msg.author.bot) return;  
  
  if (msg.content.length > 7) {
    
  db.add(`puancik_${msg.author.id + msg.guild.id}`, 3)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {
    
   db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    
 db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    
};
  
});


const queue = new Map();

var servers = {};
var prefix = 'n!';


client.on('message', async msg => { // eslint-disable-line
 
        if (msg.author.bot) return undefined;
        if (!msg.content.startsWith(ayarlar.prefix)) return undefined;
 
        const args = msg.content.split(' ');
        const searchString = args.slice(1).join(' ');
        const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
        const serverQueue = queue.get(msg.guild.id);
 
        let command = msg.content.toLowerCase().split(' ')[0];
        command = command.slice(prefix.length)


 
        if (command === 'çal') {
    if (!msg.guild) {
      
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`You can not use commands here.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
                const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(' ? | İlk olarak sesli bir kanala giriş yapmanız gerek.'));
                const permissions = voiceChannel.permissionsFor(msg.client.user);
                if (!permissions.has('CONNECT')) {
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('?? | Şuanda olduğunuz kanala girmek için gerekli izinlere sahip değilim.'));
                }
                if (!permissions.has('SPEAK')) {
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('?? | Şarkı başlatılamıyor. Lütfen mikrofonumu açınız.'));
                }
 
                if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                        const playlist = await youtube.getPlaylist(url);
                        const videos = await playlist.getVideos();
                        for (const video of Object.values(videos)) {
                                const video2 = await youtube.getVideoByID(video.id); // ehehehehu videomuzu bulalım
                                await handleVideo(video2, msg, voiceChannel, true); // ve gönderelim
                        }
      return msg.channel.sendEmbed(new Discord.RichEmbed)
      .setDescription(`? | Playlist ? **${playlist.title}** has been added to the queue!`);
                } else {
                        try {
                                var video = await youtube.getVideo(url);
                        } catch (error) {
                                try {
                                        var videos = await youtube.searchVideos(searchString, 10);
                                        let index = 0;
                                        msg.channel.sendEmbed(new Discord.RichEmbed()
                                .setTitle('Şarkı Seçimi')
      .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
       .setFooter('Lütfen 1-10 arasında bir rakam seçiniz 30 saniye içinde liste iptal edilecektir.')
          .setColor('RANDOM'));
                                        // en fazla 5 tane
                                        try {
                                                var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                                        maxMatches: 1,
                                                        time: 10000,
                                                        errors: ['time']
                                                });
                                        } catch (err) {
                                                console.error(err);
            return msg.channel.sendEmbed(new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription('? | Şarkı seçimi iptal edildi. '));
                                        }
                                        const videoIndex = parseInt(response.first().content);
                                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                                } catch (err) {
                                        console.error(err);
          return msg.channel.sendEmbed(new Discord.RichEmbed()
          .setColor('RANDOM')
          .setDescription(' ? | Herhangi bir arama sonucu elde edemedim.'));
                                }
                        }
                        return handleVideo(video, msg, voiceChannel);
                }
        } else if (command === 'geç') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`You can not use commands here.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
    if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(' ? | Lütfen öncelikle sesli bir kanala katılınız.'));
                if (!serverQueue) return msg.channel.send(' ? | Kuyruk boş olduğu için geçemiyorum. ');
                serverQueue.connection.dispatcher.end('Geç komudu kullanıldı.');
                return undefined;
        } else if (command === 'stop') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`You can not use commands here.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
    if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(' ? | Lütfen öncelikle sesli bir kanala katılınız.'));
    if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(' ? | Şu anda herhangi bir şarkı çalmıyorum.'));
                serverQueue.songs = [];
                serverQueue.connection.dispatcher.end('Kapat komutu kullanıldı!');
                return undefined;
        } else if (command === 'ses') {
      if (!msg.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
        .setDescription(`You can not use commands here.`)
        return msg.author.sendEmbed(ozelmesajuyari); }
    if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
  .setDescription(' ? | Lütfen öncelikle sesli bir kanala katılınız.'));
    if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
   .setDescription(' ? | Şu anda herhangi bir şarkı çalmıyorum.'));
    if (!args[1]) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(` ?? | Ses seviyesi: **${serverQueue.volume}**`));
                serverQueue.volume = args[0];
        if (args[1] > 50) return msg.channel.send({
            embed: {
                title: "",
                color: 0xE50000,
                description: "Lütfen 10'dan az yada 100 olarak bir sayı belirtin."
            }
        });
                serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
   .setDescription('Ses Seviyesi ' + `**${args[1]}**` + ' Olarak Ayarlandı.'));
        } else if (command === 'çalınan') {
   

   
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`? | Şu anda hiçbir şey çalmıyorum.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
    if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(':x: | Şu anda hiçbir şey çalmıyorum.'));
    return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
        } else if (command === 'kuyruk') {
                if (!serverQueue) return msg.channel.send('? | Şu anda hiçbir şey çalmıyorum. ');
                return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
     .setTitle('Şarkı Kuyruğu')
    .setDescription(`${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`))
    .addField('Şu anda çalınan: ' + `${serverQueue.songs[0].title}`);
        } else if (command === 'durdur') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`You can not use commands here.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
                if (serverQueue && serverQueue.playing) {
                        serverQueue.playing = false;
                        serverQueue.connection.dispatcher.pause();
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setDescription('? | Müzik durduruldu.')
      .setColor('RANDOM'));
                }
                return msg.channel.send('?? | Şu anda hiçbir şey çalmıyorum.');
        } else if (command === 'devam') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`Burada komutu kullanamazsınız.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
                if (serverQueue && !serverQueue.playing) {
                        serverQueue.playing = true;
                        serverQueue.connection.dispatcher.resume();
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('? | Müzik devam ediyor.'));
                }
                return msg.channel.send('? | Şu anda hiçbir şey çalmıyorum.');
  }
 
        return undefined;
});
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
        const serverQueue = queue.get(msg.guild.id);
        console.log(video);
        const song = {
                id: video.id,
                title: video.title,
                url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
                durations: video.duration.seconds,
    views: video.views,
        };
        if (!serverQueue) {
                const queueConstruct = {
                        textChannel: msg.channel,
                        voiceChannel: voiceChannel,
                        connection: null,
                        songs: [],
                        volume: 5,
                        playing: true
                };
                queue.set(msg.guild.id, queueConstruct);
 
                queueConstruct.songs.push(song);
 
                try {
                        var connection = await voiceChannel.join();
                        queueConstruct.connection = connection;
                        play(msg.guild, queueConstruct.songs[0]);
                } catch (error) {
                        console.error(`I could not join the voice channel: ${error}`);
                        queue.delete(msg.guild.id);
                        return msg.channel.send(`HATA | Ses kanalına katılamadım: ${error}`);
                }
        } else {
                serverQueue.songs.push(song);
                console.log(serverQueue.songs);
                if (playlist) return undefined;
    else return msg.channel.sendEmbed(new Discord.RichEmbed()
  .setDescription(`? | **${song.title}** adlı şarkı başarıyla kuyruğa eklendi.`)
  .setColor('RANDOM'));
        }
 
        return undefined;
}
 
function play(guild, song) {
        const serverQueue = queue.get(guild.id);
 
        if (!song) {
                serverQueue.voiceChannel.leave();
                queue.delete(guild.id);
                return;
        }
        console.log(serverQueue.songs);
 
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
                .on('end', reason => {
                        if (reason === 'Akış yeterince hızlı diğil.') console.log('Şarkı Durduruldu.');
                        else console.log(reason);
                        serverQueue.songs.shift();
                        play(guild, serverQueue.songs[0]);
                })
                .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
   serverQueue.textChannel.sendEmbed(new Discord.RichEmbed()
  .setAuthor(`Şarkı Çalınıyor`, `https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-youtube-icon-logo-by-vexels.png`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('Başlık', `[${song.title}](${song.url})`, true)
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .addField("Ses Seviyesi", `${serverQueue.volume}%`, true)
  .setColor('#FFFFFF'));
}
client.on("message", async msg => {
  
 if (msg.channel.type === "dm") return;
 if(msg.author.bot) return;  
  
  if (msg.content.length > 7) {
    
  db.add(`puancik_${msg.author.id + msg.guild.id}`, 3)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {
    
   db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    
 db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    
};
  
});


client.on("message", msg => {

  
    const embedlul = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription(":crown: " + msg.author + " Sonmeztv reklam koruması aktif, reklam yapmayı bırak evlat!:crown:")

const embedlulz = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + "REKLAM YAPIYOR!")
      .setColor(0x00AE86)
      .setDescription("n!warn <kişi> komutu ile onu uyarabilir ya da n!kick <kişi> veya n!ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(embedlul)
     msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })

client.on("guildMemberAdd", async member => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  const sayacgmesaj = await db.fetch(`sayacgm_${member.guild.id}`)
  skanal31.send(sayacgmesaj ? sayacgmesaj.replace('{kullanıcı}', `${member.user}`) .replace('{toplam}', `${sayac}`) .replace('{kalan}', `${sayac - member.guild.members.size}`) : `:inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı. \`${sayac}\` kullanıcı olmaya \`${sayac - member.guild.members.size}\` kullanıcı kaldı. (\`${ayarlar.prefix}sayaç-giriş-mesaj\` komutu ile değiştirilebilir.)`)
});

client.on("guildMemberRemove", async member => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  const sayaccmesaj = await db.fetch(`sayaccm_${member.guild.id}`)
 skanal31.send(sayaccmesaj ? sayaccmesaj.replace('{kullanıcı}', `${member.user.tag}`) .replace('{toplam}', `${sayac}`) .replace('{kalan}', `${sayac - member.guild.members.size}`) : `:inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı. \`${sayac}\` kullanıcı olmaya \`${sayac - member.guild.members.size}\` kullanıcı kaldı. (\`${ayarlar.prefix}sayaç-giriş-mesaj\` komutu ile değiştirilebilir.)`)
});


client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "botpaneltemizle") {
 if (!message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Panel ayarlanmamış.")
   if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    const a = message.guild.channels.find(channel => channel.name === "Bot Kullanımı").delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Bellek Kullanımı: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`).delete()
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Kullanıcılar: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`).delete()
      if(!c) return console.log("guildStatsBot")
      const d = message.guild.channels.find(channel => channel.name === `Toplam Kanal: ${client.channels.size.toLocaleString()}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
         const e = message.guild.channels.find(channel => channel.name === `Ping: ${client.ping}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!e) return console.log("guildStatsChannel")
            const f = message.guild.channels.find(channel => channel.name === `Yapımcım: sonmeztv`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!f) return console.log("guildStatsChannel")
               const g = message.guild.channels.find(channel => channel.name === `Kütüphanesi: Discord.js`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!g) return console.log("guildStatsChannel")
      message.channel.send(" Kanallar temizlendi.")
    }
  if (command === "botpanel") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **yes** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      message.channel.awaitMessages(response => response.content === 'yes', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Bot Kullanımı', 'category', [{
  id: message.guild.id,
  deny: ['SPEAK'],
  deny: ['CONNECT']  
}]);
        
 message.guild.createChannel(`Bellek Kullanımı: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Kullanıcılar: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, 'voice')
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Sunucular: ${client.guilds.size.toLocaleString()}  `, 'voice')
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Toplam Kanal: ${client.channels.size.toLocaleString()}`, 'voice')
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Ping: ${client.ping}`, 'voice')
.then(channel =>
                   channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Yapımcım: sonmeztv`, 'voice')
.then(channel =>
                   channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Kütüphanesi: Discord.js`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
  message.channel.send("Bot Bilgi Paneli Ayarlandı!")

        })    
    
}
});


client.on('message', message => {
if (message.content === `<@522005758401839116>`) {
 message.channel.sendEmbed(new Discord.RichEmbed()
                           .addField('Merhabalar;', 'Burada Bot Hakkında Kısa Bir Bilgi Var!')
                           .addField('Hello;', 'Botun sahibi : ! ︻芫═──- KİA#6547 dir gerekli bilgiler p!bilgi !')
                           .addField('Prefixim:','n!')
                           .addField('Gecikme:',client.ping)
                           .setColor('RANDOM')
)}
});








client.on("guildMemberAdd", async (message,member) => {
  member.send(new Discord.RichEmbed()
              .setDescription(message.guild.name + 'sunucusuna hoşgeldin' + member.user.username)
              .setColor('RANDOM')
)
});

client.on("guildMemberRemove", async (message,member) => {
  member.send(new Discord.RichEmbed()
              .setDescription(message.guild.name + 'sunucusundan ayrılmana üzüldüm' + member.user.username)
              .setColor('RANDOM')
);
//guildCreate
    client.on('guildCreate', guild => {
      const embedCreate = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('» Sunucuya Katıldım.')
      .setDescription(`${guild.name} » Adlı Sunucuya Eklendim. \n[${guild.memberCount} » Üye]!`)
      .setFooter('» Bir Sunucu Daha (Woodie)lendi', client.user.avatarURL)
      .setTimestamp()
      client.channels.get('529370116068999188').send(embedCreate);
    });
     

//guildDelete
    client.on('guildDelete', guild => {
      const embedDelete = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('» Sunucudan Ayrıldım.')
      .setDescription(`${guild.name} » Adlı Sunucudan Atıldım. \n[${guild.memberCount} » Üye]!`)
      .setFooter('» Bir Sunucu Kendini (woodie)den Kurtardı', client.user.avatarURL)
      .setTimestamp()
      client.channels.get('535037123229646848').send(embedDelete);
    });
client.on("message", msg => {
    const uyarıembed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription("Heey   + msg.author +  ---> Reklam Yapmayı Kes Bu Sunucuda Anti-Reklam Koruması Var. !! ")

const dmembed = new Discord.RichEmbed()
  .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
  .setColor(0x00AE86)
  .setDescription("Sunucunda Reklam Yapıyor n!uyar komutu ile kişiyi uyara bilirsin fakat `mod-log` kanalın olması lazım.")
  .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?") && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(uyarıembed)
     msg.guild.owner.send(dmembed).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })
  });
//reklam tespit edildi bitti
client.on('guildMemberAdd', member => {
  member.addRole(member.guild.roles.find(r => r.name.startsWith('Kullanıcı')));
  const channel = member.guild.channels.find('name', 'sonmeztv');
  if (!channel) return;
 const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
 .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
 .setTitle('Üye katıldı;')
 .setDescription(`Sunucuya katıldı Toplam [${member.guild.memberCount} üye]!`)
 .setFooter('ѕσηмєzтν', client.user.avatarURL)
 .setTimestamp()
 channel.send(embed);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'sonmeztv');
  if (!channel) return;
 const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
 .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
 .setTitle('Üye ayrıldı;')
 .setDescription(`Sunucudan ayrıldı [${member.guild.memberCount} üye]!`)
 .setFooter('ѕσηмєzтν', client.user.avatarURL)
 .setTimestamp()
 channel.send(embed);
});

client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:inbox_tray: **${member.user.tag}** Adlı Kullanıcı Katıldı. \`${sayac[member.guild.id].sayi}\` Kişi Olmamıza \`${sayac[member.guild.id].sayi - member.guild.memberCount}\` Kişi Kaldı \`${member.guild.memberCount}\` Kişiyiz!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
});

client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:outbox_tray: **${member.user.tag}** Adlı Kullanıcı Ayrıldı. \`${sayac[member.guild.id].sayi}\` Kişi Olmamıza \`${sayac[member.guild.id].sayi - member.guild.memberCount}\` Kişi Kaldı \`${member.guild.memberCount}\` Kişiyiz! `)
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});




client.ayar = db;
client.config = require("./config.js");
require("./modules/functions.js")(client);

client.ayarlar = {
        "sahip": ["520119952850681858"],  //kendi IDnızı yazınız
};

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  require("./modules/dashboard.js")(client);
});


client.on('message', message => {
    if (message.content.startsWith("bağlantı")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("Bağlantı özel bir mesajla gönderildi :link:")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('Tarafından talep edildi: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** Bağlantı süresi | Bağlantının kullanım sayısı: 10 **")
      message.author.sendEmbed(Embed11)
    }
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye'); 
  member.addRole(joinRole); 

  const channel = member.guild.channels.find('name', 'sonmeztv');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'sonmeztv');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı')
  .setTimestamp()
  channel.sendEmbed(embed); 
});


client.login(ayarlar.token);