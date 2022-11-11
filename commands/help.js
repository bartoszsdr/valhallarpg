const { EmbedBuilder } = require('discord.js')

module.exports = {
	name: 'help',
	description: 'Zobacz listę dostępnych komend.',

	async execute(client, message, args) {
		const helpEmbed = new EmbedBuilder().setColor(0x0099ff).setDescription(
			`:red_circle: **char** - parametry postaci
			:red_circle: **eq** - ekwipunek
			:red_circle: **item** *slot plecaka* - zbadaj przedmiot
            :green_circle: **use** *slot plecaka* - aktywuj przedmioty
            :green_circle: **hide** *slot aktywny* - schowaj przedmioty
            :red_circle: **sell** *sloty plecaka* - sprzedaj przedmioty
            :green_circle: **drop** *slot plecaka* - wyrzuć przedmioty
            :red_circle: **upgrade** *slot plecaka* - ulepsz przedmiot
            :red_circle: **training** - trening umiejętności
            :red_circle: **craft** - znane przepisy rzemieślnicze
            :red_circle: **craft** *numer przepisu* - stwórz przedmiot
            :yellow_circle: **map** - lista dostępnych lokacji
            :yellow_circle: **adventure** *nazwa lokacji* - wyprawa
            :red_circle: **spyglass** - wyśledź innych poszukiwaczy
            :red_circle: **attack** *imię postaci* - zaatakuj
            :red_circle: **lake** - idź nad jezioro
            :red_circle: **bait** *slot z przynętą* - zarzuć wędkę
            :red_circle: **feq** - kosz rybacki
            :red_circle: **move** *sloty kosza* - przenieś do plecaka
            :red_circle: **rank** - ranking PvP
            :red_circle: **achiev** *imię postaci* - osiągnięcia
            :yellow_circle: **return** - wróć do Cytadeli
            
            :green_circle: **coins** - losuj i sprawdź posiadane monety
            :green_circle: **ping** - komenda testowa`
		)

		message.channel.send({ embeds: [helpEmbed] })
	},
}
