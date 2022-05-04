/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import getFiles from './get-files.js';

const handler = (client) => {
  const commands = {};

  const suffix = '.js';

  const commandFiles = getFiles('./commands', suffix);
  console.log(commandFiles);

  for (const command of commandFiles) {
    let commandFile = import(command);
    if (commandFile.default) { commandFile = commandFile.default; }

    const split = command.replace(/\\/g, '/').split('/');
    const commandName = split[split.length - 1].replace(suffix, '');

    commands[commandName.toLowerCase()] = commandFile;
  }

  console.log(commands);

  client.on('messageCreate', (message) => {
    if (message.author.bot || message.content.startsWith('!')) {
      return;
    }

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!commands[commandName]) {
      return;
    }

    try {
      commands[commandName].callback(message, ...args);
    } catch (error) {
      console.error(error);
    }
  });
};

export default handler;
