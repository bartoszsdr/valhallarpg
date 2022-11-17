const { EmbedBuilder } = require('discord.js')
const players = require('../data/players.json')

module.exports = {
	name: 'char',
	description: 'Wyświetl parametry postaci.',

	async execute(client, message, args) {
		let player = players[message.author.id]

		const charEmbed = new EmbedBuilder()
			.setColor(0x992e22)
			.setAuthor({ name: `${player.name}` })
			.setDescription(
				`:punch: **${player.stats.attack}** \u200b \u200b \u200b :brain: **${player.stats.tactics}** \u200b \u200b \u200b :magic_wand: **${player.stats.magic}**\n:dna: **${player.stats.training}**\n\n:coin: **${player.balance.coins}** \u200b \u200b \u200b :gem: **${player.balance.gems}**\n\n:round_pushpin: **${player.location}**`
			)
		message.channel.send({ embeds: [charEmbed] })
	},
}
