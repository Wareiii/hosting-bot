const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  description: "Bot say",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const sayEmbed = new MessageEmbed()
        .setDescription(args.join(" "))
        .setColor("RANDOM")

    message.channel.send(sayEmbed)
  },
};