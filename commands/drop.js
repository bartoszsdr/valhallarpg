const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')

module.exports = {
	name: 'drop',
	description: 'Wyrzuć przedmioty.',

	async execute(client, message, args) {
		let backpack = players[message.author.id].inventory.backpack

		let correctIndex = []
		for (let i = 0; i < args.length; i++) {
			correctIndex.push(parseInt(args[i] - 1, 10))
		}

		function dropItems() {
			for (let i = correctIndex.length - 1; i >= 0; i--) {
				backpack.splice(correctIndex[i], 1)
			}
		}

		for (let i = 0; i < correctIndex.length; i++) {
			if (backpack[correctIndex[i]]) {
				dropItems()
				fs.writeFile('./data/players.json', JSON.stringify(players), err => {
					if (err) console.log(err)
				})
				const dropEmbed = new EmbedBuilder()
					.setColor(0x992e22)
					.setDescription(`Wyrzucone przedmioty: ${correctIndex.length}.`)
				return message.channel.send({ embeds: [dropEmbed] })
			} else {
				const dropErrorEmbed = new EmbedBuilder()
					.setColor(0x992e22)
					.setDescription('Podano pusty slot.')
				return message.channel.send({ embeds: [dropErrorEmbed] })
			}
		}
	},
}
