const fs = require('fs')
const characters = require('../data/characters.json')
const locations = require('../data/locations.js')

module.exports = {
	name: 'return',
	description: 'Wróć do Cytadeli',

	async execute(client, message, args) {
		let characterLocation = characters[message.author.id].characterLocation

		if (characterLocation !== locations[0]) {
			characterLocation = locations[0]
			fs.writeFile('./data/characters.json', JSON.stringify(characters), err => {
				if (err) console.log(err)
			})
			const returnEmbed = {
				color: 0x992e22,
				description: `Wracasz do Cytadeli.`,
			}
			message.channel.send({ embeds: [returnEmbed] })
		} else {
			const returnErrorEmbed = {
				color: 0x992e22,
				description: `Jesteś już w Cytadeli.`,
			}
			message.channel.send({ embeds: [returnErrorEmbed] })
		}
	},
}
