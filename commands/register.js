const fs = require('fs')
const { EmbedBuilder } = require('discord.js')
const characters = require('../data/characters.json')
const locations = require('../data/locations')

module.exports = {
	name: 'register',
	description: 'Rozpocznij grę.',

	async execute(client, message, args) {
		if (args[0] === undefined || args[0].length > 10 || args[0].length < 3) {
			const registerErrorEmbed = {
				color: 0x992e22,
				description: `Podaj prawidłowe imię postaci.`,
			}

			message.channel.send({ embeds: [registerErrorEmbed] })
		} else if (!characters[message.author.id]) {
			characters[message.author.id] = {
				characterName: args[0],
				characterLocation: locations[0],
				characterWallet: 0,
			}

			const registerSuccessEmbed = {
				color: 0x992e22,
				description: `${characters[message.author.id].characterName} wkracza do gry!
                **help** wyświetla dostępne komendy.`,
			}

			message.channel.send({ embeds: [registerSuccessEmbed] })

			fs.writeFile('./data/characters.json', JSON.stringify(characters), err => {
				if (err) console.log(err)
			})
		} else {
			const registeredAlreadyEmbed = {
				color: 0x992e22,
				description: `Wystąpił błąd lub masz już zarejestrowaną postać.`,
			}

			message.channel.send({ embeds: [registeredAlreadyEmbed] })
		}
	},
}
