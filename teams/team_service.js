const { Client, Collection } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  async create_teams(interaction, client) {

    //go through guild manager to get the guild
    let guilds = await client.guilds.fetch(process.env.GUILD)
    let channels = await guilds.channels.fetch()

    //find channel with ppl in voice 
    channels.map((e)=>{
      //need to change this to 10
      if(e.members.size >= 1 && e.type === "GUILD_VOICE"){
        console.log(e.name)
      }
    })

    

    //returns a Guildmember class
    let member = guilds.me

    //Get the channel id the member is currently in
    //let channelId = member.voice.channelId

  },
};
