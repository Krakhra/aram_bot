const { SlashCommandBuilder } = require('@discordjs/builders');
const aram = require("../aram/aram_service")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aram')
		.setDescription('rolls aram champions'),
	async execute(interaction,message) {
        aram.create_teams(message)
		await interaction.reply(aram.create_teams());
	},
};