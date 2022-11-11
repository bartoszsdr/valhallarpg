const { EmbedBuilder } = require('discord.js')

module.exports = (Discord, client, message) => {
	if (message.author.bot) return

	const args = message.content.split(/ +/)
	const cmd = args.shift().toLowerCase()

	const command = client.commands.get(cmd)

	if (command) {
		command.execute(client, message, args, Discord)
	} else {
		const wrongCommand = new EmbedBuilder().setColor(0x0099ff).setDescription(`:warning: Nieprawidłowa komenda.`)
		message.channel.send({ embeds: [wrongCommand] })
	}

	console.log(`CMD: ${cmd} | ARG: ${args}`)
}
