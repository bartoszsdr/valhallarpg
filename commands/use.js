const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')

module.exports = {
	name: 'use',
	description: 'Użyj przedmiotu.',

	async execute(client, message, args) {
		let active = players[message.author.id].inventory.active
		let backpack = players[message.author.id].inventory.backpack

		let index = []
		for (let i = 0; i < args.length; i++) {
			index.push(parseInt(args[i] - 1, 10))
		}

		function useItems() {
			for (let i = index.length - 1; i >= 0; i--) {
				if (!backpack[index[i]]) {
					const useErrorEmbed = new EmbedBuilder()
						.setColor(0x992e22)
						.setDescription('Podano pusty slot.')
					return message.channel.send({ embeds: [useErrorEmbed] })
				} else {
					active.push(backpack[index[i]])
					backpack.splice(index[i], 1)
				}
			}
			fs.writeFile('./data/players.json', JSON.stringify(players), err => {
				if (err) console.log(err)
			})
			const useEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription(`Przeniesione przedmioty: ${index.length}`)
			message.channel.send({ embeds: [useEmbed] })
		}

		if (args.length) {
			useItems()
		} else {
			const useErrorEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription('Musisz podać slot plecaka.')
			message.channel.send({ embeds: [useErrorEmbed] })
		}

		// for (let i = 0; i < uInventoryBackpack.length; i++) {
		// if (uInventoryBackpack[args] !== '') {
		// 	// uInventoryBackpack[i] = ''
		// 	let argsToNumber = parseInt(args)
		// 	let correctIndex = argsToNumber - 1

		// 	console.log(correctIndex)
		// 	let usedItem = uInventoryBackpack.splice(correctIndex, 1)
		// 	uInventoryActive.push(usedItem)
		// 	fs.writeFile('./data/inventory.json', JSON.stringify(inventory), err => {
		// 		if (err) console.log(err)
		// 	})
		// break
		// }
		// }
	},
}
