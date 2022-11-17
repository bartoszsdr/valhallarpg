const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')
const recipes = require('../data/recipes')

module.exports = {
	name: 'craft',
	description: 'Wytwarzaj przedmioty.',

	async execute(client, message, args) {
		let backpack = players[message.author.id].inventory.backpack

		let correctIndex = []
		for (let i = 0; i < args.length; i++) {
			correctIndex.push(parseInt(args[i] - 1, 10))
		}

		const recipesEmbed = new EmbedBuilder()
			.setColor(0x992e22)
			.setDescription(
				`:tools: **Znane przepisy rzemieślnicze:**\n*(aby wytworzyć przedmiot, składniki muszą znajdować się w plecaku)*\n\n${recipes[0]}\n${recipes[1]}`
			)
		return message.channel.send({ embeds: [recipesEmbed] })
	},
}
