const fs = require('fs')
const { EmbedBuilder } = require('discord.js')
const coins = require('../data/coins.json')

module.exports = {
	name: 'coins',
	description: 'Zobacz ile posiadasz monet.',

	async execute(client, message, args) {
		if (!coins[message.author.id]) {
			coins[message.author.id] = {
				coins: 0,
			}
		}

		let coinAmount = Math.floor(Math.random() * 3) + 1
		let baseAmount = Math.floor(Math.random() * 3) + 1
		console.log(`${coinAmount} ; ${baseAmount}`)

		if (coinAmount === baseAmount) {
			// coins[message.author.id] = {
			// 	coins: coins[message.author.id].coins + coinAmount,
			// }

			coins[message.author.id].coins = coins[message.author.id].coins + coinAmount

			fs.writeFile('./data/coins.json', JSON.stringify(coins), err => {
				if (err) console.log(err)
			})
		}

		let uCoins = coins[message.author.id].coins

		const coinEmbed = new EmbedBuilder().setColor('#f9c85a').setDescription(`:coin: *Ilość monet:* **${uCoins}**`)

		message.channel.send({ embeds: [coinEmbed] })
	},
}
