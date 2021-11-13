const { Client, Collection } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  async create_teams(client) {

    //go through guild manager to get the guild
    let guilds = client.guilds.fetch(process.env.GUILD)
    guilds.then((value)=>{
        console.log(value.me.voice)
    })

    //returns a Guildmember class
    let member = guilds.me

    //Get the channel id the member is currently in
    //let channelId = member.voice.channelId

  },
};
