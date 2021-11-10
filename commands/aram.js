const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder} = require("@discordjs/builders");
const aram = require("../aram/aram_service");
const team = require("../aram/team_service");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aram")
    .setDescription("rolls aram champions"),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Some title")
      .setURL("https://discord.js.org/")
      .setAuthor(
        "Some name",
        "https://i.imgur.com/AfFp7pu.png",
        "https://discord.js.org"
      )
      .setDescription("Some description here")
      .setThumbnail("https://i.imgur.com/AfFp7pu.png")
      .addFields(
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true }
      )
      .addField("Inline field title", "Some value here", true)
      .setImage("https://i.imgur.com/AfFp7pu.png")
      .setTimestamp()
      .setFooter("Some footer text here", "https://i.imgur.com/AfFp7pu.png");

    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
