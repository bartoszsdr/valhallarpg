const fs = require('fs')
const characters = require('../data/characters.json')
const inventory = require('../data/inventory.json')
const locations = require('../data/locations')

module.exports = {
	name: 'sell',
	description: 'Sprzedaj przedmiot.',

	async execute(client, message, args) {
		let uInventoryBackpack = inventory[message.author.id].backpack

		let argsToNumber = parseInt(args[0], 10)
		let correctIndex = argsToNumber - 1

		if (characters[message.author.id].characterLocation !== locations[0]) {
			const sellErrorEmbed = {
				color: 0x992e22,
				description: `Sprzedawać możesz tylko w Cytadeli.`,
			}

			message.channel.send({ embeds: [sellErrorEmbed] })
		} else if (uInventoryBackpack[correctIndex]) {
			let soldItem = uInventoryBackpack[correctIndex].value
			let soldItemValue = parseInt(soldItem, 10)
			uInventoryBackpack.splice(correctIndex, 1)[0]

			characters[message.author.id].characterWallet = characters[message.author.id].characterWallet + soldItemValue

			console.log(characters[message.author.id].characterWallet)

			fs.writeFile('./data/characters.json', JSON.stringify(characters), err => {
				if (err) console.log(err)
			})
			fs.writeFile('./data/inventory.json', JSON.stringify(inventory), err => {
				if (err) console.log(err)
			})
			const soldEmbed = {
				color: 0x992e22,
				description: `Sprzedano przedmiot za **${soldItemValue}** :coin:`,
			}
			message.channel.send({ embeds: [soldEmbed] })
		} else {
			const soldErrorEmbed = {
				color: 0x992e22,
				description: `Podano nieprawidłowy slot.`,
			}
			message.channel.send({ embeds: [soldErrorEmbed] })
		}
	},
}
