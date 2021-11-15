const { Client, Collection } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const random_teams = (members) => {
  let obj = { team1: [], team2: [] };

  members.map((e) => {
    //if either team is full
    if (obj["team1"].length === 5) {
      obj["team2"].push(e);
    } else if (obj["team2"].length === 5) {
      obj["team1"].push(e);
    //else randomize teams
    } else {
      // 50/50 
      if (Math.random() === 0) {
        obj["team1"].push(e);
      } else {
        obj["team2"].push(e);
      }
    }
  });

  return obj;
};

module.exports = {
  async create_teams(interaction, client) {
    //go through guild manager to get the guild
    let guilds = await client.guilds.fetch(process.env.GUILD);
    let channels = await guilds.channels.fetch();

    let target_channel = null;
    //find channel with ppl in voice
    channels.map((e) => {
      //need to change this to 10
      if (e.members.size >= 1 && e.type === "GUILD_VOICE") {
        target_channel = e;
      }
    });

    //get all members in target voice
    //when done with this code use actual members
    //let members = target_channel.members
    let members = [
      "Kira",
      "Trevor",
      "Andy",
      "Dennis",
      "Lai",
      "William",
      "Braden",
      "Ryan",
      "Daniel",
      "Sean",
    ];

    let teams = random_teams(members);

    console.log(teams);

    //create an object with the teams
  },
};
