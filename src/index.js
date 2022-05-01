/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

// Require the necessary discord.js classes
import Pokedex from 'pokedex-promise-v2';
import {
  Client, Intents, Constants, MessageEmbed,
} from 'discord.js';
import dotenv from 'dotenv';
import typeChart from '../typeChartDef.js';

dotenv.config();

// const fs = require('node:fs');
// const axios = require('axios');
// const {
//   Client, Collection, Intents, Constants,
// } = require('discord.js');
// const { guildId, token } = require('../config.json');

// Create a new client instance
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

const pokedex = new Pokedex();

// client.commands = new Collection();
// const commandFiles = fs
//   .readdirSync('src/commands')
//   .filter((file) => file.endsWith('.js'));

// commandFiles.forEach((file) => {
//   const command = require(`./commands/${file}`);
//   client.commands.set(command?.data.name, command);
// });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('The bot is up and running!');

  const guild = client.guilds.cache.get(process.env.guildId);
  let commands;

  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application?.commands;
  }

  commands?.create({
    name: 'ping',
    description: 'Replies with pong',
  });

  commands?.create({
    name: 'add',
    description: 'Adds two numbers',
    options: [
      {
        name: 'num1',
        description: 'The first number',
        required: true,
        type: Constants.ApplicationCommandOptionTypes.NUMBER,
      },
      {
        name: 'num2',
        description: 'The second number',
        required: true,
        type: Constants.ApplicationCommandOptionTypes.NUMBER,
      },
    ],
  });

  commands?.create({
    name: 'pokemon',
    description: 'Returns information about a Pokemon',
    options: [
      {
        name: 'name',
        description: 'The name of the Pokemon',
        required: true,
        type: Constants.ApplicationCommandOptionTypes.STRING,
      },
    ],
  });

  commands?.create({
    name: 'jerry',
    description: 'You can\'t just call people the r word jerry',
  });
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName, options } = interaction;

  if (commandName === 'ping') {
    interaction.reply({
      content: 'pong',
      ephemeral: true,
    });
  } else if (commandName === 'add') {
    const num1 = options.getNumber('num1');
    const num2 = options.getNumber('num2');

    await interaction.deferReply({});

    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await interaction.editReply({
      content: `The sum is ${num1 + num2}`,
    });
  } else if (commandName === 'pokemon') {
    const pokemon = options.get('name');
    const pokeData = await pokedex.getPokemonByName(pokemon.value);

    const types = [];
    pokeData.types.forEach((slot) => {
      types.push(slot.type.name);
    });

    let effectiveChart = {};
    if (types.length > 1) {
      effectiveChart = Object.entries(typeChart[types[1]])
        .reduce(
          (acc, [key, value]) => ({ ...acc, [key]: acc[key] * value }),
          { ...typeChart[types[0]] },
        );
    } else {
      effectiveChart = typeChart[types[0]];
    }

    const displayChart = [];
    Object.entries(effectiveChart).forEach((type) => {
      displayChart.push(`${type[0]}: ${type[1]}`);
    });

    const pokeEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle(pokeData?.name)
      .setThumbnail(pokeData?.sprites.front_default)
      .addFields(
        { name: 'id', value: `${pokeData?.id}` },
        { name: 'height', value: `${pokeData?.height}` },
        { name: 'types', value: `${types.join(', ')}` },
        { name: 'type chart', value: `${displayChart.join('\n')}` },
      )
      .setImage(pokeData.sprites.front_default);

    await interaction.reply({ embeds: [pokeEmbed] });
  } else if (commandName === 'jerry') {
    interaction.reply('You can\'t just call people the r word Jerry');
  }
});

// client.on('messageCreate', (message) => {
//   if (message.content === 'ping') {
//     message.reply({
//       content: 'pong',
//     });
//   }
// });

// // Slash Commands
// client.on('interactionCreate', async (interaction) => {
//   if (!interaction.isCommand()) return;

//   const command = client.commands.get(interaction.commandName);

//   if (!command) return;

//   try {
//     await command.execute(interaction);
//   } catch (error) {
//     console.error(error);
//     await interaction.reply({
// content: 'There was an error while executing this command!',
//  ephemeral: true });
//   }
// });

// Login to Discord with your client's token
client.login(process.env.token);
