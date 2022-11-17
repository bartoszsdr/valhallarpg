const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')

module.exports = {
	name: 'item',
	description: 'Pokaż opis przedmiotu.',

	async execute(client, message, args) {
		let backpack = players[message.author.id].inventory.backpack

		let argsToNumber = parseInt(args[0], 10)
		let correctIndex = argsToNumber - 1

		if (backpack[correctIndex]) {
			const item = backpack[correctIndex]

			const itemEmbed = {
				color: 0x992e22,
				description: `- **${item.name}** -\n\n${item.type} **${item.attack}**\n\n${item.description}\n**${item.value}** :coin:`,
			}

			message.channel.send({ embeds: [itemEmbed] })
		} else {
			const itemErrorEmbed = {
				color: 0x992e22,
				description: `Podano nieprawidłowy slot.`,
			}

			message.channel.send({ embeds: [itemErrorEmbed] })
		}
	},
}
