const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({
	intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'MessageContent'],
	partials: ['Channel', 'GuildMember', 'Message', 'Reaction', 'User'],
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
;['commandHandler', 'eventHandler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord)
})

client.login(process.env.DISCORD_TOKEN)
