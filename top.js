const { MessageEmbed } = require('discord.js');
let ms = require('ms')
let db = require('pro.db')
module.exports = {
  name: "top",
  description: "to see leadbord Of Team Points",

  run: async (client, interaction, args) => {
    try {
  let data = db.fetchAll();
  let users = [];    
  for(let key in data){
    if (data[key].count){
      users.push(data[key])
    }
  };
  let new_data = users.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));
  let num = new_data.length;
  let top = ''
  if (num > 10) num = 10;
   for(let i = 0; i < num; i++){
     let user = client.users.cache.get(new_data[i].userId);
     
     top += `**#${i + 1} | ${user.tag} | ${new_data[i].count}**\n`
   }
  let embed = new MessageEmbed()
  .setDescription(`${top}`)
  .setColor("CYAN")
  .setThumbnail(client.user.displayAvatarURL())
 .setTimestamp() 
  .setAuthor({name: "The Top 10 Team Points" , iconURL: client.user.displayAvatarURL()})

  await interaction.editReply({embeds: [embed]});
    } catch (err) {
      console.log(err)
    }
  }
}
