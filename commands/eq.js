const fs = require('fs')
const inventory = require('../data/inventory.json')

module.exports = {
	name: 'eq',
	description: 'Wyświetl ekwipunek postaci.',

	async execute(client, message, args) {
		let player = message.author.id

		if (!inventory[message.author.id]) {
			inventory[message.author.id] = {
				active: [],
				backpack: [],
			}
			fs.writeFile('./data/inventory.json', JSON.stringify(inventory), err => {
				if (err) console.log(err)
			})
		}

		let playerInventory = inventory[message.author.id]
		let invActiveEmbed = `:unlock: *Aktywne:* \n`
		let invBackpackEmbed = `:school_satchel: *Plecak:* \n`

		for (let i = 0; i < 5; ++i) {
			if (!inventory[message.author.id].active[i]) {
				invActiveEmbed += `${i + 1}.` + '\n'
			} else {
				invActiveEmbed +=
					`${i + 1}. **${playerInventory.active[i].name}** ${playerInventory.active[i].type} **${
						playerInventory.active[i].attack
					}**` + '\n'
			}
		}

		for (let i = 0; i < 5; ++i) {
			if (!inventory[message.author.id].backpack[i]) {
				invBackpackEmbed += `${i + 1}.` + '\n'
			} else {
				invBackpackEmbed +=
					`${i + 1}. **${playerInventory.backpack[i].name}** ${playerInventory.backpack[i].type} **${
						playerInventory.backpack[i].attack
					}**` + '\n'
			}
		}

		const invEmbed = {
			color: 0x992e22,
			description: `${invActiveEmbed}` + `\n` + `${invBackpackEmbed}` + `\n`,
		}

		message.channel.send({ embeds: [invEmbed] })
	},
}
