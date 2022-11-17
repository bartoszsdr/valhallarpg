const { EmbedBuilder } = require('discord.js')
const players = require('../../data/players.json')

module.exports = (Discord, client, message) => {
	if (message.author.bot) return

	const args = message.content.split(/ +/)
	const cmd = args.shift().toLowerCase()

	const command = client.commands.get(cmd)

	if (!players[message.author.id] && cmd !== 'register') {
		const registerFirstEmbed = {
			color: 0x0099ff,
			description: 'Komenda do rejestracji: **register** *imię postaci*',
		}
		return message.channel.send({ embeds: [registerFirstEmbed] })
	}

	if (command) {
		command.execute(client, message, args, Discord)
	} else {
		const wrongCommand = {
			color: 0x0099ff,
			description: ':warning: Nieprawidłowa komenda.',
		}
		message.channel.send({ embeds: [wrongCommand] })
	}

	console.log(`CMD: ${cmd} | ARG: ${args}`)
}
