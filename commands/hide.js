const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const inventory = require('../data/inventory.json')

module.exports = {
	name: 'hide',
	description: 'Schowaj przedmiot.',

	async execute(client, message, args) {
		let uInventoryActive = inventory[message.author.id].active
		let uInventoryBackpack = inventory[message.author.id].backpack

		let argsToNumber = parseInt(args[0], 10)
		let correctIndex = argsToNumber - 1

		if (uInventoryActive[correctIndex]) {
			let item = uInventoryActive.splice(correctIndex, 1)[0]
			uInventoryBackpack.push(item)

			fs.writeFile('./data/inventory.json', JSON.stringify(inventory), err => {
				if (err) console.log(err)
			})
			const hideEmbed = new EmbedBuilder().setColor(0x0099ff).setDescription(`Przeniesiono przedmiot.`)
			message.channel.send({ embeds: [hideEmbed] })
		} else {
			const hideErrorEmbed = new EmbedBuilder().setColor(0x0099ff).setDescription(`Podano nieprawidłowy slot.`)
			message.channel.send({ embeds: [hideErrorEmbed] })
		}
	},
}
