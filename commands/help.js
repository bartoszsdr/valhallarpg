const { EmbedBuilder } = require('discord.js')

module.exports = {
	name: 'help',
	description: 'Zobacz listę dostępnych komend.',

	async execute(client, message, args) {
		const helpEmbed = new EmbedBuilder().setColor(0x0099ff).setDescription(
			`:green_circle: **char** - parametry postaci
			:green_circle: **eq** - ekwipunek
			:green_circle: **item** *slot plecaka* - zbadaj przedmiot
            :green_circle: **use** *sloty plecaka* - aktywuj przedmioty
            :green_circle: **hide** *sloty aktywny* - schowaj przedmioty
            :green_circle: **sell** *sloty plecaka* - sprzedaj przedmioty
            :green_circle: **drop** *sloty plecaka* - wyrzuć przedmioty
            :red_circle: **upgrade** *slot plecaka* - ulepsz przedmiot
            :red_circle: **training** - trening umiejętności
            :red_circle: **craft** - znane przepisy rzemieślnicze
            :red_circle: **craft** *numer przepisu* - stwórz przedmiot
            :yellow_circle: **map** - lista dostępnych lokacji
            :yellow_circle: **adventure** *nazwa lokacji* - wyprawa
            :red_circle: **spyglass** - wyśledź innych poszukiwaczy
            :red_circle: **attack** *imię postaci* - zaatakuj
            :green_circle: **lake** - idź nad jezioro
            :red_circle: **bait** *slot z przynętą* - zarzuć wędkę
            :red_circle: **feq** - kosz rybacki
            :red_circle: **move** *sloty kosza* - przenieś do plecaka
            :red_circle: **rank** - ranking PvP
            :red_circle: **achiev** *imię postaci* - osiągnięcia
            :green_circle: **return** - wróć do Cytadeli`
		)
		message.channel.send({ embeds: [helpEmbed] })
	},
}
