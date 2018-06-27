const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });



bot.on("ready", async () => {
    //displays in command line
    console.log(`${bot.user.username} is online!`);
    //setting bot's 'Playing _____' on profile
    bot.user.setActivity("Dolphin");
});

bot.on("message", async message => {

    if (message.author.bot) {
        return;
    } else if (message.channel.type === "dm") {
        return;
    }

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    //!command
    let cmd = messageArray[0];
    //Bot's string
    let args = messageArray.slice(1);

    if (cmd === `${prefix}tim`) {

        message.channel.send("tim", { files: ["./images/tim.png"] });
    }

    if (cmd === `${prefix}noobdogg`) {
        return message.channel.send("noob dogg.");
    }

    if (cmd === `${prefix}gamers`) {
        return message.channel.send("They targeted gamers. \n \nGamers. \n \nWe're a group of people who will sit for hours, days, even weeks on end performing some of the hardest, most mentally demanding tasks. Over, and over, and over all for nothing more than a little digital token saying we did. \n \nWe'll punish our selfs doing things others would consider torture, because we think it's fun. \n \nWe'll spend most if not all of our free time min maxing the stats of a fictional character all to draw out a single extra point of damage per second. \n \nDo these people have any idea how many controllers have been smashed, systems over heated, disks and carts destroyed in frustration? All to latter be referred to as bragging rights? \n \nThese people honestly think this is a battle they can win? They take our media? We’re already building a new one without them. They take our devs? Gamers aren’t shy about throwing their money else where, or even making the games our selves. They think calling us racist, mysoginistic, rape apologists is going to change us? We’ve been called worse things by prepubescent 10 year olds with a shitty head set. They picked a fight against a group that’s already grown desensitized to their strategies and methods. Who enjoy the battle of attrition they’ve threatened us with. Who take it as a challange when they tell us we no longer matter. Our obsession with proving we can after being told we can’t is so deeply ingrained from years of dealing with big brothers/sisters and friends laughing at how pathetic we used to be that proving you people wrong has become a very real need; a honed reflex. \n \nGamers are competative, hard core, by nature. We love a challange. The worst thing you did in all of this was to challange us. You’re not special, you’re not original, you’re not the first; this is just another boss fight.");
    }

    if (cmd === `${prefix}commands`) {

        let botIcon = bot.user.displayAvatarURL;
        let botEmbed = new Discord.RichEmbed()
            .setDescription("Commands")
            .setColor("#23272a")
            .setThumbnail(botIcon)
            .addField("!noobdog", "displays: 'noob dog.'")
            .addField("!gamers", "They targeted gamers.")
            .addField("!tim", "tim");

        return message.channel.send(botEmbed);
    }

    if (cmd === `${prefix}serverinfo`) {

        let Sicon = message.guild.iconURL;
        let serverEmbed = new Discord.RichEmbed()
            .setDescription("Server Information")
            .setColor("#23272a")
            .setThumbnail(Sicon)
            .addField("Server name: ", message.guild.name)

            .addField("Created on: ", message.guild.createdAt)

            .addField("You joined: ", message.member.joinedAt)

            .addField("Total members: ", message.guild.memberCount);

        return message.channel.send(serverEmbed);

    }

    if (cmd === `${prefix}foxjab`) {

        let foxJab = new Discord.RichEmbed()
            .setDescription("Fox Jab Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", "17")
            .addField("IASA: ", "16")
            .addField("Hit Frames: ", "2-3")
            .addField("Min Damage: ", "2%")
            .addField("Max Damage: ", "4%");

        return [message.channel.send(foxJab), message.channel.send({ file: "./images/foxjab.gif" })];
        
    }
    
    
    if (cmd === `${prefix}toilet`) {
        let sender = message.author;
        let toiletEmbed3 = new Discord.RichEmbed()
            .setDescription(sender + " fell into the toilet!")
            .setThumbnail("http://www.wtfcaptcha.com/wp-content/uploads/2010/03/funny-picture-photo-child-toilet-massdistraction-pic.jpg");
            
        let toiletEmbed = new Discord.RichEmbed()
            .setDescription(sender + " flipped the toilet seat up!")
            .setThumbnail("https://image.shutterstock.com/image-vector/white-contemporary-toilet-seat-directional-260nw-107301602.jpg");

        let toiletEmbed2 = new Discord.RichEmbed()
            .setDescription(sender + " flipped the toilet seat down!")
            .setThumbnail("https://thumb9.shutterstock.com/display_pic_with_logo/137608/107301608/stock-vector-a-white-contemporary-toilet-with-the-seat-down-and-a-directional-arrow-put-the-seat-down-107301608.jpg");
        
            function getRandomInt(max){
                return Math.floor(Math.random() * Math.floor(max));
            }

        if(getRandomInt(3) === 0){
            return message.channel.send(toiletEmbed);
        } else if(getRandomInt(3) === 1){
            return message.channel.send(toiletEmbed2);
        } else{
            return message.channel.send(toiletEmbed3);
        }
        
    }

    function change(){
        b ^= true;
    }

    


});



bot.login(botconfig.token);
