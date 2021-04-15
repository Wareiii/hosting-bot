const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessagEmbed } = require('discord.js');
module.exports = {
    name: "avatar",
    description: "Shows Your avatar",
    category: "info",
    run: async (Client, message, args) => {
let user = message.mentions.users.first() ||  message.guild.members.cache.get(args[1]) || message.author;
message.channel.send( new Discord.MessageEmbed()
.setAuthor(user.username,user.avatarURL())
.setDescription(`**[Avatar Link](${user.avatarURL()})**`)
.setImage(user.avatarURL(
{dynamic : true,
format : 'png',
size : 1024}
))
);
}
    }