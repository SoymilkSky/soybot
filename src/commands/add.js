const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('Replies with Boop!'),
  async execute(interaction) {
    await interaction.reply('Boop!');
  },
};
