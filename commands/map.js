const { EmbedBuilder } = require('discord.js')

module.exports = {
	name: 'map',
	description: 'Lista dostępnych lokacji.',

	async execute(client, message, args) {
		const mapEmbed = new EmbedBuilder().setColor(0x0099ff).setDescription(
			`:map: **Znane lokacje:**
            
            :evergreen_tree: Las
            :bat: Jaskinie
            `
		)
		message.channel.send({ embeds: [mapEmbed] })
	},
}
