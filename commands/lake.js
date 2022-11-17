const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')
const locations = require('../data/locations')

module.exports = {
	name: 'lake',
	description: 'Idź nad jezioro.',

	async execute(client, message, args) {
		let player = players[message.author.id]

		if (player.location !== locations[1]) {
			player.location = locations[1]
			fs.writeFile('./data/players.json', JSON.stringify(players), err => {
				if (err) console.log(err)
			})
			const lakeEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription(':hook: A oto Wielkie Jezioro nieopodal Cytadeli.')
			message.channel.send({ embeds: [lakeEmbed] })
		} else{
            const lakeErrorEmbed = new EmbedBuilder()
                .setColor(0x992e22)
                .setDescription('Jesteś już nad Jeziorem.')
            message.channel.send({ embeds: [lakeErrorEmbed] })
        }
	},
}
