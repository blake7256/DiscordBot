const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = function async (bot, message, args){
    //!tempmute @user 1s/m/h/d

    let toMute = (message.mentions.user.first() || message.guild.members.get(args[0]));
    if(!toMute){
        return message.reply("Couldn't find user.");
    }
    if(toMute.hasPermission("MANAGE_MESSAGES")){
        return message.reply("Can't mute them.");
    }

    let muteRole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muteRole){
        try{
            muteRole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermission(muteRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                })
            })
        }catch(e){
            console.log(e.stack);
        }
    }
    //end of create role
    let muteTime = args[1];
    if(!muteTime){
        return message.reply("You didn't specify a time.");
    }

    await(toMute.addRole(muteRole.id));
    message.reply(`<@${toMute.id}> has been muted for ${ms(muteTime)}.`);

    setTimeout(function(){
        toMute.removeRole(muterole.id);
        message.channel.send(`<@${toMute.id}> has been unmuted.`)
    }, ms(muteTime));
    //end of module
}

module.exports.help = {
    name: "tempmute"
}