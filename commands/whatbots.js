const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('whatbots')
    .setDescription('Returns a list of the bots in this server'),
  async execute(interaction) {
    const bots = await interaction.guild.members.fetch().then( list => {
      return list.filter(m => m.user.bot === true).map(b => b.user);
    });
    await interaction.reply({ content: `The following bots are in this server:\n${bots.join('\n')}`})
  },
}