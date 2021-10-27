const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]}); 

let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);

const DISCORD_CLIENT_TOKEN = config.botToken
const prefix = config.prefix 

client.login(DISCORD_CLIENT_TOKEN);

client.on("message", message=>{
    console.log("Gelen mesaj " + message.content)
});


