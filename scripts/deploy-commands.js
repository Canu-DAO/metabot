const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { keys } = require('../config.js');

const commands = [];
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(keys.discordKey);

if (process.env.DEPLOY === 'guild') {
  rest.put(Routes.applicationGuildCommands(keys.clientId, keys.guildId), { body: commands })
    .then(() => console.log('Successfully registered application guild commands.'))
    .catch(console.error);
} else {
  rest.put(Routes.applicationCommands(keys.clientId), { body: commands })
    .then(() => console.log('Successfully registered application GLOBAL commands.'))
    .catch(console.error);
}
