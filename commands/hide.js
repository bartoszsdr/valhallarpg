const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')

module.exports = {
	name: 'hide',
	description: 'Schowaj przedmiot.',

	async execute(client, message, args) {
		let active = players[message.author.id].inventory.active
		let backpack = players[message.author.id].inventory.backpack

		let index = []
		for (let i = 0; i < args.length; i++) {
			index.push(parseInt(args[i] - 1, 10))
		}

		function hideItems() {
			for (let i = index.length - 1; i >= 0; i--) {
				if (!active[index[i]]) {
					const hideErrorEmbed = new EmbedBuilder()
						.setColor(0x992e22)
						.setDescription('Podano pusty slot.')
					return message.channel.send({ embeds: [hideErrorEmbed] })
				} else {
					backpack.push(active[index[i]])
					active.splice(index[i], 1)
				}
			}
			fs.writeFile('./data/players.json', JSON.stringify(players), err => {
				if (err) console.log(err)
			})
			const hideEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription(`Przeniesione przedmioty: ${index.length}`)
			message.channel.send({ embeds: [hideEmbed] })
		}

		if (args.length) {
			hideItems()
		} else {
			const hideErrorEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription(`Musisz podać slot aktywny.`)
			message.channel.send({ embeds: [hideErrorEmbed] })
		}
	},
}
