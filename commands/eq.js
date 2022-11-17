const { EmbedBuilder } = require('discord.js')
const players = require('../data/players.json')

module.exports = {
	name: 'eq',
	description: 'Wyświetl ekwipunek postaci.',

	async execute(client, message, args) {
		let inventory = players[message.author.id].inventory
		let invActiveEmbed = `:unlock: *Aktywne:* \n`
		let invBackpackEmbed = `:school_satchel: *Plecak:* \n`

		for (let i = 0; i < 5; ++i) {
			if (!inventory.active[i]) {
				invActiveEmbed += `${i + 1}.` + '\n'
			} else {
				invActiveEmbed +=
					`${i + 1}. **${inventory.active[i].name}** ${inventory.active[i].type} **${inventory.active[i].attack}**` +
					'\n'
			}
		}

		for (let i = 0; i < 5; ++i) {
			if (!inventory.backpack[i]) {
				invBackpackEmbed += `${i + 1}.` + '\n'
			} else {
				invBackpackEmbed +=
					`${i + 1}. **${inventory.backpack[i].name}** ${inventory.backpack[i].type} **${
						inventory.backpack[i].attack
					}**` + '\n'
			}
		}

		const invEmbed = new EmbedBuilder()
			.setColor(0x992e22)
			.setDescription(`${invActiveEmbed}` + `\n` + `${invBackpackEmbed}` + `\n`)
		message.channel.send({ embeds: [invEmbed] })
	},
}
