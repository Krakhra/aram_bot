const { Faces } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
var champions_json = require("./champions.json");

// takes both team pools and creates a discord embed
const create_embed = (t1, t2) => {
  console.log(t1,t2)
  let embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Just Wiped Out Tomato Town Aram")
    .addFields(
      { name: "Aram Bot 1.0", value: "Please select champions from YOUR pool" },
    )
  
  // string builder
  let team1String = '';
  let team2String = '';

  for(let i = 0; i < 10;i++){
    team1String += t1[i] + '\n'
    team2String += t2[i] + '\n'
  }
  
  embed.addFields(
    {name:"Team 1", value:team1String, inline:true},
    {name:"Team 2", value:team2String, inline:true}
  )
  
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
     
      //for some reason you can get undefined
      while(champions[index] == undefined){
        index = Math.floor(Math.random() * (m - 0) + 0);
      }

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
      m -= 1;
    }
    console.log(team1);
    console.log(team2);

    return create_embed(team1,team2)
  },
};
