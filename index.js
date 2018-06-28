const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", () => {
    bot.user.setUsername("Sempai");
});

bot.login("token");

bot.on("ready", async () => {
    //displays in command line
    console.log(`${bot.user.username} is online!`);
    //setting bot's 'Playing _____' on profile
    bot.user.setActivity("beep boop haha");
});





/////////////////////////////////////////////////// DATA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////// | \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const foxFrameData = {
    "foxjab": {
        totalFrames: "17",
        IASA: "16",
        hitFrames: "2-3",
        minDamage: "2%",
        maxDamage: "4%",
    },
    "foxftilt": {
        totalFrames: "26",
        hitFrames: "5-8"
    },
    "foxdtilt": {
        totalFrames: "29",
        hitFrames: "7-9",
        IASA: "28"
    },
    "foxuptilt": {
        totalFrames: "24",
        hitFrames: "5-11",
        IASA: "23"
    },
    "foxdashattack": {
        totalFrames: "39",
        hitFrames: "4-17",
        IASA: "36"
    },
    "foxfsmash": {
        totalFrames: "39",
        hitFrames: "12-22",
        chargeFrame: "7"
    },
    "foxupsmash": {
        totalFrames: "41",
        hitFrames: "7-17",
        headInvincible: "1-9",
        chargeFrame: "2"
    },
    "foxdsmash": {
        totalFrames: "49",
        hitFrames: "6-10",
        legsInvincible: "6",
        IASA: "46",
        chargeFrame: "2",
    },
    "foxnair": {
        totalFrames: "49",
        hitFrames: "4-31",
        IASA: "42",
        autoCancel: "<3 37>",
        landlag: "15",
        lcanceled: "7"
    },
    "foxupair": {
        totalFrames: "39",
        hitFrames: "8-9, 11-14",
        IASA: "36",
        autoCancel: "<7 26>",
        landlag: "18",
        lcanceled: "9"
    },
    "foxbackair": {
        totalFrames: "39",
        hitFrames: "4-19",
        IASA: "38",
        autoCancel: "<3 24>",
        landlag: "20",
        lcanceled: "10"
    },
    "foxdownair": {
        totalFrames: "49",
        hitFrames: "5-6, 8-9, 11-12, 14-15, 17-18, 20-21, 23-24",
        autoCancel: "<4 31>",
        landlag: "18",
        lcanceled: "9"
    },
    "foxforwardair": {
        totalFrames: "59",
        hitFrames: "6-8, 16-18, 24-26, 33-35, 43-45",
        IASA: "53",
        autoCancel: "<5 49>",
        landlag: "22",
        lcanceled: "11"
    },
    "foxgrab": {
        totalFrames: "30",
        grab: "7-8"
    },
    "foxshine": {
        totalFrames: "39 (or more)",
        hitFrames: "1",
        reflects: "4-21 or release+1",
        lagUponRelease: "19",
        reflectionLag: "19",
    },
    "foxsideb": {
        totalFrames: "63",
        foxStartsMovingAway: "21",
        hitFrames: "22-25",
        timeToPressB: "20-24",
        canGrabEdgeAsEarlyAs: "29",
        landlag: "20",
        landFallSpecialLag: "3"
    },
    "foxfirefox": {
        totalFrames: "92",
        hitFrames: "20, 22, 24, 26, 28, 30, 32, 43-72",
        whenToAim: "42",
        canGrabEdgeDuringFirst: "16",
        canGrabEdgeDuringMoving: "73",
        landlag: "6",
        landFallSpecialLag: "3"
    },
    "foxspotdodge": {
        totalFrames: "22",
        involnerable: "invulnerable 2-15 out of 22"
    }
};

var marthFrameData = {
    "marthjab1": {
        totalFrames: "27",
        hitFrames: "4-7",
        windowOfTheSecondsSlash: "3-27",
        secondSlashStarts: "20",
        IASA: "26"
    }
}

/////////////////////////////////////////////////// DATA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////// DATA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





let toilet = 'down';
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
            .addField("Total Frames: ", foxFrameData.foxjab.totalFrames)
            .addField("IASA: ", foxFrameData.foxjab.IASA)
            .addField("Hit Frames: ", foxFrameData.foxjab.hitFrames)
            .addField("Min Damage: ", foxFrameData.foxjab.minDamage)
            .addField("Max Damage: ", foxFrameData.foxjab.maxDamage);
        return [message.channel.send(foxJab), message.channel.send({ file: "./images/foxjab.gif" })];
    }

    if (cmd === `${prefix}foxftilt`) {
        let foxftilt = new Discord.RichEmbed()
            .setDescription("Fox FTilt Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxftilt.totalFrames)
            .addField("Hit Frames: ", foxFrameData.foxftilt.hitFrames);
        return [message.channel.send(foxftilt), message.channel.send({ file: "./images/foxftilt.gif" })];
    }

    if (cmd === `${prefix}foxdtilt`) {
        let foxdtilt = new Discord.RichEmbed()
            .setDescription("Fox DTilt Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxdtilt.totalFrames)
            .addField("IASA: ", foxFrameData.foxdtilt.IASA)
            .addField("Hit Frames: ", foxFrameData.foxdtilt.hitFrames);
        return [message.channel.send(foxdtilt), message.channel.send({ file: "./images/foxdtilt.gif" })];
    }

    if (cmd === `${prefix}foxuptilt`) {
        let foxuptilt = new Discord.RichEmbed()
            .setDescription("Fox Uptilt Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxuptilt.totalFrames)
            .addField("IASA: ", foxFrameData.foxuptilt.IASA)
            .addField("Hit Frames: ", foxFrameData.foxuptilt.hitFrames);
        return [message.channel.send(foxuptilt), message.channel.send({ file: "./images/foxuptilt.gif" })];
    }

    if (cmd === `${prefix}foxdashattack`) {
        let foxdashattack = new Discord.RichEmbed()
            .setDescription("Fox Dash Attack Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxdashattack.totalFrames)
            .addField("IASA: ", foxFrameData.foxdashattack.IASA)
            .addField("Hit Frames: ", foxFrameData.foxdashattack.hitFrames);
        return [message.channel.send(foxdashattack), message.channel.send({ file: "./images/foxdashattack.gif" })];
    }

    if (cmd === `${prefix}foxupsmash`) {
        let foxupsmash = new Discord.RichEmbed()
            .setDescription("Fox Up Smash Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxjab.totalFrames)
            .addField("IASA: ", foxFrameData.foxupsmash.IASA)
            .addField("Hit Frames: ", foxFrameData.foxupsmash.hitFrames)
            .addField("Head invincible (but not snout): ", foxFrameData.foxupsmash.headInvincible)
            .addField("Charge frame: ", foxFrameData.foxupsmash.chargeFrame);
        return [message.channel.send(foxupsmash), message.channel.send({ file: "./images/foxupsmash.gif" })];
    }

    if (cmd === `${prefix}foxdsmash`) {
        let foxdsmash = new Discord.RichEmbed()
            .setDescription("Fox Down Smash Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxdsmash.totalFrames)
            .addField("IASA: ", foxFrameData.foxdsmash.IASA)
            .addField("Hit Frames: ", foxFrameData.foxdsmash.hitFrames)
            .addField("Legs Invincible: ", foxFrameData.foxdsmash.legsInvincible)
            .addField("Charge frame: ", foxFrameData.foxdsmash.chargeFrame);
        return [message.channel.send(foxdsmash), message.channel.send({ file: "./images/foxdsmash.gif" })];
    }

    if (cmd === `${prefix}foxnair`) {
        let foxnair = new Discord.RichEmbed()
            .setDescription("Fox Nair Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxnair.totalFrames)
            .addField("IASA: ", foxFrameData.foxnair.IASA)
            .addField("Hit Frames: ", foxFrameData.foxnair.hitFrames)
            .addField("Auto cancel: ", foxFrameData.foxnair.autoCancel)
            .addField("Landlag: ", foxFrameData.foxnair.landlag)
            .addField("Lcanceled: ", foxFrameData.foxnair.lcanceled);
        return [message.channel.send(foxnair), message.channel.send({ file: "./images/foxnair.gif" })];
    }

    if (cmd === `${prefix}foxupair`) {
        let foxupair = new Discord.RichEmbed()
            .setDescription("Fox Up Air Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxupair.totalFrames)
            .addField("IASA: ", foxFrameData.foxupair.IASA)
            .addField("Hit Frames: ", foxFrameData.foxupair.hitFrames)
            .addField("Auto cancel: ", foxFrameData.foxupair.autoCancel)
            .addField("Landlag: ", foxFrameData.foxupair.landlag)
            .addField("Lcanceled: ", foxFrameData.foxupair.lcanceled);
        return [message.channel.send(foxupair), message.channel.send({ file: "./images/foxupair.gif" })];
    }

    if (cmd === `${prefix}foxbair`) {
        let foxbackair = new Discord.RichEmbed()
            .setDescription("Fox Back Air Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxbackair.totalFrames)
            .addField("IASA: ", foxFrameData.foxbackair.IASA)
            .addField("Hit Frames: ", foxFrameData.foxbackair.hitFrames)
            .addField("Auto cancel: ", foxFrameData.foxbackair.autoCancel)
            .addField("Landlag: ", foxFrameData.foxbackair.landlag)
            .addField("Lcanceled: ", foxFrameData.foxbackair.lcanceled);
        return [message.channel.send(foxbackair), message.channel.send({ file: "./images/foxbair.gif" })];
    }

    if (cmd === `${prefix}foxdair`) {
        let foxdownair = new Discord.RichEmbed()
            .setDescription("Fox Down Air Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxdownair.totalFrames)
            .addField("IASA: ", foxFrameData.foxdownair.IASA)
            .addField("Hit Frames: ", foxFrameData.foxdownair.hitFrames)
            .addField("Auto cancel: ", foxFrameData.foxdownair.autoCancel)
            .addField("Landlag: ", foxFrameData.foxdownair.landlag)
            .addField("Lcanceled: ", foxFrameData.foxdownair.lcanceled);
        return [message.channel.send(foxdownair), message.channel.send({ file: "./images/foxdair.gif" })];
    }

    if (cmd === `${prefix}foxfair`) {
        let foxfair = new Discord.RichEmbed()
            .setDescription("Fox Forward Air Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxforwardair.totalFrames)
            .addField("IASA: ", foxFrameData.foxforwardair.IASA)
            .addField("Hit Frames: ", foxFrameData.foxforwardair.hitFrames)
            .addField("Auto cancel: ", foxFrameData.foxforwardair.autoCancel)
            .addField("Landlag: ", foxFrameData.foxforwardair.landlag)
            .addField("Lcanceled: ", foxFrameData.foxforwardair.lcanceled);
        return [message.channel.send(foxfair), message.channel.send({ file: "./images/foxfair.gif" })];
    }

    if (cmd === `${prefix}foxgrab`) {
        let foxgrab = new Discord.RichEmbed()
            .setDescription("Fox Grab Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxgrab.totalFrames)
            .addField("Grab: ", foxFrameData.foxgrab.grab);
        return [message.channel.send(foxgrab), message.channel.send({ file: "./images/foxgrab.gif" })];
    }

    if (cmd === `${prefix}foxshine`) {
        let foxshine = new Discord.RichEmbed()
            .setDescription("Fox Shine Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxshine.totalFrames)
            .addField("Reflects: ", foxFrameData.foxshine.reflects)
            .addField("Hit Frames: ", foxFrameData.foxshine.hitFrames)
            .addField("Lag Upon Release: ", foxFrameData.foxshine.lagUponRelease)
            .addField("Reflection lag: ", foxFrameData.foxshine.reflectionLag);

        return [message.channel.send(foxshine), message.channel.send({ file: "./images/foxshine.gif" })];
    }

    if (cmd === `${prefix}foxsideb`) {
        let foxsideb = new Discord.RichEmbed()
            .setDescription("Fox Illusion Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxsideb.totalFrames)
            .addField("Fox starts moving away: ", foxFrameData.foxsideb.totalFrames)
            .addField("Hit Frames: ", foxFrameData.foxsideb.hitFrames)
            .addField("Time to press B and stop Fox: ", foxFrameData.foxsideb.timeToPressB)
            .addField("Landlag: ", foxFrameData.foxsideb.landlag)
            .addField("Landfallspeciallag: ", foxFrameData.foxsideb.landFallSpecialLag);
        return [message.channel.send(foxsideb), message.channel.send({ file: "./images/foxsideb1.gif" }), message.channel.send({ file: "./images/foxsideb2.gif" })];
    }

    if (cmd === `${prefix}foxfirefox`) {
        let foxfirefox = new Discord.RichEmbed()
            .setDescription("Fox Up-B Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxfirefox.totalFrames)
            .addField("Hit Frames: ", foxFrameData.foxfirefox.hitFrames)
            .addField("When to aim: ", foxFrameData.foxfirefox.whenToAim)
            .addField("Landlag: ", foxFrameData.foxfirefox.landlag)
            .addField("Landfallspeciallag: ", foxFrameData.foxfirefox.landFallSpecialLag);
        return [message.channel.send(foxfirefox), message.channel.send({ file: "./images/foxfirefox.gif" })];
    }


    if (cmd === `${prefix}foxspotdodge`) {
        let foxfirefox = new Discord.RichEmbed()
            .setDescription("Fox Spotdodge Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/d/db/FoxHeadSSBM.png")
            .addField("Total Frames: ", foxFrameData.foxspotdodge.totalFrames)
            .addField("Invulnerability: ", foxFrameData.foxspotdodge.involnerable);
        return [message.channel.send(foxfirefox), message.channel.send({ file: "./images/foxspotdodge.gif" })];
    }

    /////////////////////////////////////MARTH/////////////////////////////////////////////////

    if (cmd === `${prefix}marthjab1`) {
        let marthjab1 = new Discord.RichEmbed()
            .setDescription("Marth Jab 1 Frame Data")
            .setColor("#23272a")
            .setThumbnail("https://www.ssbwiki.com/images/9/9b/MarthHeadSSBM.png")
            .addField("Total Frames: ", marthFrameData.marthjab1.totalFrames)
            .addField("Hit Frames: ", marthFrameData.marthjab1.hitFrames)
            .addField("Window of the second slash: ", marthFrameData.marthjab1.windowOfTheSecondsSlash)
            .addField("Second slash starts: ", marthFrameData.marthjab1.secondSlashStarts)
            .addField("IASA: ", marthFrameData.marthjab1.IASA);
        return [message.channel.send(marthjab1), message.channel.send({file: "./images/marthjab1.gif"})];
    }

    if (cmd === `${prefix}toilet`) {
        let sender = message.author;

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        let toiletEmbed = new Discord.RichEmbed()
            .setDescription(sender + " flipped the toilet seat " + toilet + "!")
            .setThumbnail("https://image.shutterstock.com/image-vector/white-contemporary-toilet-seat-directional-260nw-107301602.jpg");

        let toiletEmbed2 = new Discord.RichEmbed()
            .setDescription(sender + " flipped the toilet seat " + toilet + "!")
            .setThumbnail("https://thumb9.shutterstock.com/display_pic_with_logo/137608/107301608/stock-vector-a-white-contemporary-toilet-with-the-seat-down-and-a-directional-arrow-put-the-seat-down-107301608.jpg");

        let toiletEmbed3 = new Discord.RichEmbed()
            .setDescription(sender + " fell into the toilet!")
            .setThumbnail("http://www.wtfcaptcha.com/wp-content/uploads/2010/03/funny-picture-photo-child-toilet-massdistraction-pic.jpg");

        if (getRandomInt(10) === 9) {
            message.channel.send(toiletEmbed3);
        } else {
            if (toilet == 'down') {
                toilet = 'up';
                message.channel.send(toiletEmbed2);
            } else

                if (toilet == 'up') {
                    toilet = 'down';
                    message.channel.send(toiletEmbed);
                }
        }


    }

    if (cmd === `${prefix}loopnoobdogg`){

        var interval = setInterval (function(){
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }

            if(getRandomInt(5) === 4){
                message.channel.send("tim");
            } else if(getRandomInt(5) === 3){
                message.channel.send("Never thought I'd be writing this...woe is me. So yesterday around 10 pm, I'm chilling at G.E, asking people if they wanna see my cock, aka 90m cash stack. Some bro approaches me and says there's a drop party not too far away, and I just go bonkers. A drop party?? uhhh, Hell Yea!\n\nAnyhoo, I follow this guy to like the cooking guild and he stops..'sorry broo, no drop party, I was actually just trying to hack you lol.'\n\nHack...me..? I thought to myself there's no way this guy would hack me! I'm like unhackable. Next thing you know he's asking for my password! Saying let me hack you lol. No way this dudes a hacker, no way I'm getting hacked bro. only thing getting hacked is my throat after this blunt right lol? So, I give this dude my password. Not hacked. totally knew it. Then when he logs back in, he's like lemme get your 'recov quests' bro, you know just cuz. Just cuz? I see no problem there so I fork over my answers. After that I'm like let's hit this cooking guild bro, and he's like nah man I gotta go g, but before I do, can you log out? I was like sure dude....and here I am. Can't log in...90m cock gone. I'm totally shocked..Never thought this would happen. $11 am I right?");
            } else if(getRandomInt(5) === 2){
                message.channel.send("profane is a noob");
            } else if (getRandomInt(5) === 1){
                message.channel.send("noob dogg");
            } else {
                message.channel.send("please talk to me");
            }
            //message.channel.send("Noob Dogg.")




            //.catch(console.error);
        }, 1 * 9000000); //3600000 1 hour, 9000000 2.5 hours

        return interval;

    }

});

bot.login(process.env.BOT_TOKEN);
bot.login(botconfig.token);
