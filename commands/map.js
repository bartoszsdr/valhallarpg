module.exports = {
	name: 'map',
	description: 'Wyświelt listę dostępnych lokacji.',

	async execute(client, message, args) {
		const mapEmbed = {
			color: 0x0099ff,
			description: `:map: **Znane lokacje:**\n:evergreen_tree: Las\n:bat: Jaskinie`,
		}

		message.channel.send({ embeds: [mapEmbed] })
	},
}
