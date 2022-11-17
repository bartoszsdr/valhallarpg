const { EmbedBuilder } = require('discord.js')
const fs = require('fs')
const players = require('../data/players.json')

module.exports = {
	name: 'sell',
	description: 'Sprzedaj przedmioty.',

	async execute(client, message, args) {
        let player = players[message.author.id]
        let backpack = players[message.author.id].inventory.backpack
        let itemValues = [] 
        let totalValue

		let index = []
		for (let i = 0; i < args.length; i++) {
			index.push(parseInt(args[i] - 1, 10))
		}

        function sellItems() {
            for (let i = index.length - 1; i >= 0; i--) {
				if (!backpack[index[i]]) {
					const sellErrorEmbed = new EmbedBuilder()
						.setColor(0x992e22)
						.setDescription('Podano pusty slot.')
					return message.channel.send({ embeds: [sellErrorEmbed] })
				} else {
                    itemValues.push(parseInt(backpack[index[i]].value, 10))
                    totalValue = itemValues.reduce((pv, cv) => pv + cv, 0);
                    player.inventory.backpack.splice(index[i], 1)
                    player.balance.coins = player.balance.coins + totalValue           
				}
			}
			fs.writeFile('./data/players.json', JSON.stringify(players), err => {
				if (err) console.log(err)
			})
			const useEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription(`Sprzedane przedmioty: ${index.length}\nOtrzymane: **${totalValue}** :coin:`)
			message.channel.send({ embeds: [useEmbed] })
        }

        if (args.length) {
			sellItems()
		} else {
			const sellErrorEmbed = new EmbedBuilder()
				.setColor(0x992e22)
				.setDescription('Musisz podać slot plecaka.')
			message.channel.send({ embeds: [sellErrorEmbed] })
		}
	
	},
}
