module.exports = {
	name: 'ping',
	description: 'Komenda testowa.',

	async execute(client, message, args) {
		message.reply('pong')
	},
}
