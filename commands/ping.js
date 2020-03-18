const Discord = require("discord.js");
module.exports.run = async(client, message) => {

const m = await message.channel.send("Ping?");
let embed = new Discord.RichEmbed()
.setAuthor("Conexão 📶", message.author.avatarURL)
.addField("A sua latência é de", `${m.createdTimestamp - message.createdTimestamp}ms`)
.addField("A minha latência é de", `${Math.round(client.ping) -3}ms`)
.setTimestamp()
.setFooter(`${client.user.username}`, client.user.avatarURL)
.setColor(0x03a9f4)

m.edit({embed});
}

module.exports.help = {
    name: "ping",
    description: "Comando para verificar a latência da API."
}