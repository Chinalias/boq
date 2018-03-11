const Discord = require("discord.js");
const client = new Discord.Client();
console.log("Welcome Again !PL BAKTASH!")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

bot.login(process.env.BOT_TOKEN);
