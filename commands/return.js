const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')
const locations = require('../data/locations')

module.exports = {
	name: 'return',
	description: 'Wróć do Cytadeli.',

	async execute(client, message, args) {
		let player = players[message.author.id]

		if (player.location !== locations[0]) {
			player.location = locations[0]
			fs.writeFile('./data/players.json', JSON.stringify(players), err => {
				if (err) console.log(err)
			})
			const returnEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription('Wracasz do Cytadeli.')
			message.channel.send({ embeds: [returnEmbed] })
		} else {
			const returnErrorEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription('Jesteś już w Cytadeli.')
			message.channel.send({ embeds: [returnErrorEmbed] })
		}
	},
}
