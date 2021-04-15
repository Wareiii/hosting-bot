const { Message } = require('discord.js')
module.exports = {
    name: "nuke",
    description: "Delete and create channel",
    /**
     * 
     * @param {*} client 
     * @param {Message} message 
     * @param {*} args 
     */


    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS'))  return message.reply('I need manage channels permission!');
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        
        message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete();

            ch.send('Nuked this channel!')
            ch.send('https://tenor.com/view/explosion-boom-explode-gif-17383346')
        })

    }
}