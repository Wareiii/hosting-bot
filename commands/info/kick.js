module.exports = {
    name: "kick",
    description: "Kick a member",
    run : async(client, message, args) => {

        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You must have the `KICK_MEMBERS` permission in order to use this command');

        await message.delete();

        let user = message.mentions.users.first();
        let reason = args.slice(1).join(" ");

        const Member = message.mentions.members.first() 
        if(!Member) return message.channel.send('Please specify a member to kick');
        if(user.id === message.author.id) return;
        if(user.id === client.user.id) return;

        await Member.kick({reason : args.slice(1).join(" ")})
        if(!reason) reason = "No reason was specified";
        message.channel.send(`**${Member.user.tag}** was kicked from the server.\n**Reason:** ${reason}`)
    }
}