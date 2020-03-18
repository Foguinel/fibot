const Discord = require("discord.js");
const client = new Discord.Client();
const configBot = require("./configBot.json");

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(configBot.prefix)) return;
    let args = message.content.split(" ").slice(1);
    let cmd = message.content.split(" ")[0];
    cmd = cmd.slice(configBot.prefix.length);
    try{
    let exec = require('./commands/' + cmd + '.js');
    exec.run(client, message, args, botavatar, firebase, database, ms);
    }catch(erro) { console.log(erro) }
});

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

client.on("message", async message => {
  if(message.author.bot) return;

  if(message.content.indexOf(configBot.prefix) !== 0) return;

  let sender = message.author;
  const args = message.content.slice(configBot.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  })
client.login(configBot.token)