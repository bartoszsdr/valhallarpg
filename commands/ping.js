module.exports = {
	name: 'ping',
	description: 'Just a test command.',

	async execute(client, message, args) {
		message.reply('pong')
	},
}
