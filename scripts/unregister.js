const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { keys } = require('../config.js');

const rest = new REST({ version: '9' }).setToken(keys.discordKey);

rest.put(Routes.applicationGuildCommands(keys.clientId, keys.guildId), { body: [] })
  .then(() => console.log('Successfully UNregistered application commands.'))
  .catch(console.error);
