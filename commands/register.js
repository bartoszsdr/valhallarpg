const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')
const locations = require('../data/locations')

module.exports = {
	name: 'register',
	description: 'Rozpocznij grę.',

	async execute(client, message, args) {
		if (!args[0] || args[0].length > 10 || args[0].length < 3) {
			const registerErrorEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription('Podaj prawidłowe imię postaci.')
			message.channel.send({ embeds: [registerErrorEmbed] })
		} else if (!players[message.author.id]) {
			players[message.author.id] = {
				name: args[0],
				location: locations[0],
				inventory: {
					active: [],
					backpack: [],
				},
				stats: {
					attack: 0,
					tactics: 0,
					magic: 0,
					training: 0,
				},
				balance: {
					coins: 0,
					gems: 0,
				},
			}
			fs.writeFile('./data/players.json', JSON.stringify(players), err => {
				if (err) console.log(err)
			})
			const registerSuccessEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription(`${players[message.author.id].name} wkracza do gry!\n**help** wyświetla dostępne komendy.`)
			message.channel.send({ embeds: [registerSuccessEmbed] })
		} else {
			const registeredErrorEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription('Wystąpił błąd lub masz już zarejestrowaną postać.')
			message.channel.send({ embeds: [registeredErrorEmbed] })
		}
	},
}
