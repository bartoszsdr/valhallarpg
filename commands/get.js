const fs = require('fs')
const players = require('../data/players.json')
const items = require('../data/items')

module.exports = {
	name: 'get',
	description: 'Komenda testowa.',

	async execute(client, message, args) {
		let backpack = players[message.author.id].inventory.backpack

		if (args[0] == 1 && backpack.length < 5) {
			let item = items[Math.floor(Math.random() * items.length)]
			backpack.push(item)
			console.log(item)
			fs.writeFile('./data/players.json', JSON.stringify(players), err => {
				if (err) console.log(err)
			})
			message.channel.send('Dodano 1 przedmiot.')
			console.log(`${items[1].name} ${items[1].type} ${items[1].attack}`)
		} else {
			message.channel.send('Masz pełen ekwipunek.')
		}
	},
}
