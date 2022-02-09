const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const botList = JSON.parse(fs.readFileSync('./botList.json', 'utf-8'));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('new')
		.setDescription('Returns list of bots recommended for a new server'),
	async execute(interaction) {
    const message = new MessageEmbed()
      .setTitle('👋 congrats on starting a discord!')
      .setDescription('Here is a short list of bots that will help you manage your new community')
    botList.forEach( b => {
      message.addField(b.name, `[homepage](${b.homepage}) 🖱️ **[invite](${b.inviteLink}&disable_guild_select=true&guild_id=${interaction.guildId})**\n${b.description}\n*help command:* ${b.help}\n`)
    });
    await interaction.reply({ embeds:[ message ], ephemeral:true })
	},
}
