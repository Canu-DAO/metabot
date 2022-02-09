require('dotenv').config()

const keys = {
  "clientId": process.env.CLIENT_ID,
  "guildId": process.env.GUILD_ID,
  "discordKey": process.env.DISCORD_KEY
}

module.exports = {
  keys
}