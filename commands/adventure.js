// const fs = require('fs')
// const { EmbedBuilder } = require('discord.js')
// const location = require('../data/location.json')

// const locations = ['Cytadela', 'Las', 'Jaskinie']

// const adventureEmbed = new EmbedBuilder()
// 	.setColor(0x0099ff)
// 	.setDescription('Wyruszasz na wyprawę :hourglass_flowing_sand:')

// module.exports = {
// 	name: 'adventure',
// 	description: 'Idź na wyprawę.',

// 	async execute(client, message, args) {
// 		// If player is at undefined location, move them to the default location.
// 		if (!location[message.author.id]) {
// 			location[message.author.id] = {
// 				location: locations[0],
// 			}
// 		}

// 		if (args == 'las') {
// 			location[message.author.id] = {
// 				location: locations[1],
// 			}
// 			fs.writeFile('./data/location.json', JSON.stringify(location), err => {
// 				if (err) console.log(err)
// 			})
// 			message.channel.send({ embeds: [adventureEmbed] })
// 		} else if (args == 'jaskinie') {
// 			location[message.author.id] = {
// 				location: locations[2],
// 			}
// 			fs.writeFile('./data/location.json', JSON.stringify(location), err => {
// 				if (err) console.log(err)
// 			})
// 			message.channel.send({ embeds: [adventureEmbed] })
// 		}
// 	},
// }
