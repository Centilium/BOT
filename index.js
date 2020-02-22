const tokenfile = require("./token.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const prefix = "!",

bot.on('ready', function() {
  setInterval(async () => {
const statuslist = [
  `!help | ${bot.guilds.size} serveurs`, 
  `!help| ${bot.channels.size} salons`,
  `!help | ${bot.users.size} users`,
      
];
const random = Math.floor(Math.random() * statuslist.length);

try {
  await bot.user.setPresence({
    game: {
      name: `${statuslist[random]}`,
      type: "STREAMING",
      url: 'https://www.twitch.tv/twitch_nigary'
    },
    status: "online"
  });
} catch (error) {
  console.error(error);
}
}, 14000);
});
bot.on('message' , message => {
if(message.content === prefix + "help"){
    message.delete();
    message.channel.send("Je suis " + bot.user.username + ", Votre nouveau bot Discord que vous pouvez modifier avec tout type de logiciel textuel ! Voici la commande pour ajouté le bot sur vos serveur `!bot`")
}
if(message.content === prefix + "bot"){
  message.delete();
  message.channel.send("https://discordapp.com/oauth2/authorize?client_id=" + bot.user.id + "&scope=bot&permissions=2146958847")
})

bot.login(tokenfile.token);
