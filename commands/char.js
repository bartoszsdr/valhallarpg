const characters = require('../data/characters.json')
const inventory = require('../data/inventory.json')

module.exports = {
	name: 'char',
	description: 'Wyświetl parametry postaci.',

	async execute(client, message, args) {
		const charEmbed = {
			color: 0x992e22,
			author: {
				name: `${characters[message.author.id].characterName}`,
			},
			description: `:punch: **0** \u200b \u200b \u200b :brain: **0** \u200b \u200b \u200b :magic_wand: **0**\n:dna: **0**\n\n:coin: **${
				characters[message.author.id].characterWallet
			}** \u200b \u200b \u200b :gem: **0**`,
		}

		message.channel.send({ embeds: [charEmbed] })
	},
}
