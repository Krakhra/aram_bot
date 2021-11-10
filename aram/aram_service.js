const { Faces } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
var champions_json = require("./champions.json");

const create_embed = (champions) => {
  const embed = new MessageEmbed()
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

  return embed;
};

module.exports = {
  roll_champions() {
    let champions = champions_json[0]["champion"];
    let isTeam1 = true;
    let team1 = [];
    let team2 = [];
    let m = 157;

    for (let i = 0; i < 20; i++) {
      //randomize which champion
      index = Math.floor(Math.random() * (m - 0) + 0);
      m -= 1;

      //insert into alternating teams
      if (isTeam1) {
        team1.push(champions[index]);
        isTeam1 = false;
      } else {
        team2.push(champions[index]);
        isTeam1 = true;
      }

      //remove champion from array
      if (index >= 0 && index < m) {
        champions.splice(index, 1);
      }
    }
    console.log(team1);
    console.log(team2);
  },
};
