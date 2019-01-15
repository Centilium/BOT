const Discord = require("discord.js")
const bot = new Discord.Client()

var prefix = (".")

bot.on("ready", function() {
    bot.user.setActivity("maintenance en cours / .help");
    console.log("Prêt")
});

bot.login("NTI3NjI4Mjg3ODI0ODg3ODIw.DxFvlw.hKsQCCwy8XFiaP0hCytyN-y9XAo");

bot.on('message', message => {
      if (message.content === prefix + "help"){
        message.reply("En cours de maintenance, on travail sur ce bot tout les jours merci de patienter... ");
        console.log("help")
    }
})
bot.on('message', message => {
    if (message.content === "Salut"){
      message.reply(content = "Salut, comment allez vous ?")
      console.log("Commande salut comment allez vous ? effectué")
    }
})
bot.on('message', message => {
    if (message.content === "salut"){
      message.reply(content = "Salut, comment allez vous ?")
      console.log("Commande salut comment allez vous ? effectué")
    }
})
bot.on('message', message => {
    if (message.content === "Bonsoir"){
      message.reply(content = "Bonsoir, comment allez vous ?")
      console.log("Commande Bonjour comment allez vous ? effectué")
  }
})
bot.on('message', message => {
    if (message.content === "bonsoir"){
      message.reply(content = "Bonsoir, comment allez vous ?")
      console.log("Commande Bonjour comment allez vous ? effectué")
  }
})
bot.on('message', message => {
    if (message.content === "Bonjour"){
      message.reply(content = "Bonjour, comment allez vous ?")
      console.log("Commande Bonjour comment allez vous ? effectué")
  }
})
bot.on('message', message => {
    if (message.content === "bonjour"){
      message.reply(content = "Bonjour, comment allez vous ?")
      console.log("Commande bonjour comment allez vous ? effectué")
  }
})
bot.on('message', message => {
    if (message.content === "Bien et vous ?"){
      message.reply(content = "C'est toujours un plaisir de parler avec vous !!! Donc Oui, super")
      console.log("Commande Bien et vous  effectué")
  }
})
bot.on('message', message => {
    if (message.content === "bien et vous ?"){
      message.reply(content = "C'est toujours un plaisir de parler avec vous !!! Donc Oui, super")
      console.log("Commande Bien et vous  effectué")
  }
})
bot.on('message', message => {
    if (message.content === "Bien et toi ? ?"){
      message.reply(content = "C'est toujours un plaisir de parler avec vous !!! Donc Oui, super")
      console.log("Commande Bien et vous  effectué")
  }
})
bot.on('message', message => {
    if (message.content === "Très bien et vous ?" ){
      message.reply(content = "C'est toujours un plaisir de parler avec vous !!! Donc Oui, super")
      console.log("Commande Bien et vous  effectué")
  }
})
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('**Bienvenue sur le serveur Centilium Esport.:wink: Vous devez sélectionnés votre langues et accepté le réglements grâce au réaction et ensuite séléctionée vos jeux dans le salon tes-jeux. Vous pouvez partager le serveur via ce lien : https://discord.gg/wz7wfSm ** Merci a toi ' + member.displayName)
    }).catch(console.error)
})
