const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const inventory = require('../data/inventory.json')
const items = require('../data/items')

module.exports = {
	name: 'item',
	description: 'Wyrzuć przedmioty.',

	async execute(client, message, args) {
		let uInventoryBackpack = inventory[message.author.id].backpack

		let argsToNumber = parseInt(args[0], 10)
		let correctIndex = argsToNumber - 1

		if (uInventoryBackpack[correctIndex]) {
			const foundItem = uInventoryBackpack[correctIndex]
			console.log(foundItem)

			const itemEmbed = {
				color: 0x992e22,
				description: `- **${foundItem.name}** -\n\n${foundItem.type} **${foundItem.attack}**\n\n${foundItem.description}\n**${foundItem.value}** :coin:`,
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
