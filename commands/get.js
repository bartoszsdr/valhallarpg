const fs = require('fs')
const inventory = require('../data/inventory.json')
const items = require('../data/items')

module.exports = {
	name: 'get',
	description: 'Weź przedmioty.',

	async execute(client, message, args) {
		let uInventoryBackpack = inventory[message.author.id].backpack

		if (args[0] == 1 && uInventoryBackpack.length < 5) {
			let item = items[Math.floor(Math.random() * items.length)]
			uInventoryBackpack.push(item)
			console.log(item)
			fs.writeFile('./data/inventory.json', JSON.stringify(inventory), err => {
				if (err) console.log(err)
			})
			message.channel.send('Dodano 1 przedmiot.')
			console.log(`${items[1].name} ${items[1].type} ${items[1].attack}`)
		} else {
			message.channel.send('Masz pełen ekwipunek.')
		}
	},
}
