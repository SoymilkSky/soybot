const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('time')
    .setDescription('Replies with the current time!'),
  async execute(interaction) {
    await interaction.reply(`${new Date()}`);
  },
};
