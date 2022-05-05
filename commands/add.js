const { SlashCommandBuilder } = require('@discordjs/builders');

export default {
  data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('adds two numbers')
    .addUserOption((option) => { option.setName('num1').setDescription('the first number'); })
    .addUserOption((option) => { option.setName('num2').setDescription('the second number'); }),
  async execute(interaction) {
    console.log(interaction);
    await interaction.reply(`the sum is `);
  },
};
