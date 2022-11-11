const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const inventory = require('../data/inventory.json')

module.exports = {
	name: 'drop',
	description: 'Wyrzuć przedmioty.',

	async execute(client, message, args) {
		let uInventoryBackpack = inventory[message.author.id].backpack

		let argsToNumber = parseInt(args[0], 10)
		let correctIndex = argsToNumber - 1

		if (uInventoryBackpack[correctIndex]) {
			uInventoryBackpack.splice(correctIndex, 1)[0]
			fs.writeFile('./data/inventory.json', JSON.stringify(inventory), err => {
				if (err) console.log(err)
			})
			const dropEmbed = new EmbedBuilder().setColor(0x0099ff).setDescription(`Wyrzucono przedmiot.`)
			message.channel.send({ embeds: [dropEmbed] })
		} else {
			const dropErrorEmbed = new EmbedBuilder().setColor(0x0099ff).setDescription(`Podano nieprawidłowy slot.`)
			message.channel.send({ embeds: [dropErrorEmbed] })
		}
	},
}
