const { SlashCommandBuilder} = require("@discordjs/builders");
const aram = require("../aram/aram_service");
const team = require("../aram/team_service");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aram")
    .setDescription("rolls aram champions"),
  async execute(interaction) {
    embed = aram.roll_champions()
    await interaction.reply({ embeds: [embed] });
  },
};
