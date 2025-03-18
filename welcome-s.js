const { MessageEmbed , PermissionsBitField } = require('discord.js');
const config = require('../../config.json')
const line = "https://cdn.discordapp.com/attachments/1056280511787585617/1063454480470913065/24_3259FD3.gif"
let color = "#000099"
module.exports = {
  name:"welcome-s",
  description:"To Welcome Seller",
  options : [{
    name : "user",
    description: "User You Want To Welcome",
    type: 6,
    required: true,
    } , {
    name : "roles",
    description: "Seller Roles ?",
    type: 3,
    required: true
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.editRply(`** 😕 You don't have permission **`);
  
    var user = interaction.options.getMember('user')
    
    var roles = interaction.options.getString('roles')

const channel = interaction.guild.channels.cache.get(config.teamJoinChannel)

  if (!channel) return interaction.editReply('**Cannot Get Join Team Channel ! , Please Edit it From Config.json file !**');

interaction.editReply(`**Team Welcome Successfully Sent ✅**`)

channel.send(`> **𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖳𝗈 𝖮𝗎𝗋 𝖳𝖾𝖺𝗆** ${user} <a:Yred:987667329338974218>

> **𝖲𝖾𝗅𝗅𝖾𝗋 : ${roles}**

> **𝖤𝗇𝗃𝗈𝗒 𝖶𝗂𝗍𝗁 𝖭𝖾𝗏𝖾𝗋 𝖳𝖾𝖺𝗆** <a:Yred:987667329338974218>

> **Mention :** <@&968991513860243537>`)

await new Promise (r => setTimeout (r,1000))

channel.send({embeds: [
    new MessageEmbed()
    .setColor(color)
    .setImage(line)
  ]})
      
} catch (err) {
      console.log(err)
  }
 }
}
