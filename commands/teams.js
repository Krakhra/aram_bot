const { SlashCommandBuilder} = require("@discordjs/builders");
const teams = require("../teams/team_service");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("teams")
    .setDescription("Generate two teams"),
  async execute(client) {
    teams.create_teams(client)
    await interaction.reply("helo");
  },
};
