const fs = require('fs')
const inventory = require('../data/inventory.json')

module.exports = {
	name: 'use',
	description: 'Użyj przedmiotu.',

	async execute(client, message, args) {
		let uInventoryActive = inventory[message.author.id].active
		let uInventoryBackpack = inventory[message.author.id].backpack

		let argsToNumber = parseInt(args[0], 10)
		let correctIndex = argsToNumber - 1

		if (uInventoryActive.length == 5) {
			return message.channel.send('Nie możesz przenieść więcej przedmiotów.')
		}

		if (uInventoryBackpack[correctIndex]) {
			let item = uInventoryBackpack.splice(correctIndex, 1)[0]
			console.log(item)
			uInventoryActive.push(item)

			fs.writeFile('./data/inventory.json', JSON.stringify(inventory), err => {
				if (err) console.log(err)
			})

			const useEmbed = {
				color: 0x0099ff,
				description: 'Przeniesiono przedmiot.',
			}

			message.channel.send({ embeds: [useEmbed] })
		} else {
			const useErrorEmbed = {
				color: 0x0099ff,
				description: 'Podano nieprawidłowy slot.',
			}

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
