const { MessageEmbed , PermissionsBitField } = require('discord.js');
const { ReactionCollector } = require('discord-collector');
const config = require('../../config.json')
const line = "https://cdn.discordapp.com/attachments/1056280511787585617/1063454480470913065/24_3259FD3.gif"
let color = "#000099"
module.exports = {
  name:"upgrade-s",
  description:"To Upgrade Seller",
  options : [{
    name : "user",
    description: "Seller You Want To Upgrade",
    type: 6,
    required: true,
    }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.editReply(`** 😕 You don't have permission **`);

var user = interaction.options.getMember('user')

if (user.user.id === interaction.user.id) return interaction.editReply(`**You Can't Upgrade Yourself ! **`);
      
const disAllowedRoles = ['968952347344654346','973422076281114635','968952248468115576','968952514932252744']

if (!user.roles.cache.has('968948595606835290')) return interaction.editReply(`🚫 The User \`${user.user.username}\` Is Not A Seller !`);

var memberHighestRolePosition = user.roles.highest.position;

let upgradeRole = interaction.guild.roles.cache.find(r => r.position === memberHighestRolePosition+1)

if (disAllowedRoles.includes(upgradeRole.id)) upgradeRole = interaction.guild.roles.cache.find(r => r.position === memberHighestRolePosition+3);

if (upgradeRole.position > interaction.guild.roles.cache.find(r => r.name === '・─━━〔 𝖠𝖽𝗆𝗂𝗇𝖲 〕━━─・').position) return interaction.editReply('🚫 Error : Owners Should Upgrade Manually !');

interaction.deleteReply()

var botMessage = await interaction.channel.send({
content:`**
The Seller \`${user.user.username}\` Will Upgrade To \`${upgradeRole.name}\`... Are You Sure ?
**`, 
ephemeral:true })

if (await ReactionCollector.yesNoQuestion({ botMessage, user: interaction.user })) {

const upgradeChannel = interaction.guild.channels.cache.get('968981861592354836')

await user.roles.add(upgradeRole)
.then( () => {

botMessage.edit(`**The Seller ${user.user.username} Successfully Upgraded And Upgrade Message Was Sent To ${upgradeChannel}**`)

upgradeChannel.send(`**
> Message : has been promoted 



> User Upgraded : ${user} 



> Upgrade Role : ${upgradeRole}



> By : ${interaction.user}
> Mention : <@&968948595606835290>
**`)

upgradeChannel.send({
      embeds: [
        new MessageEmbed()
.setColor(color)  .setImage(line)
      ]
    })

  
})
.catch( (e) => botMessage.edit('🚫 Error : '+e.message))

} else {
await botMessage.edit('❌ Operation Cancelled !');


}
      
/*
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
  ]})*/
      
} catch (err) {
      console.log(err)
  }
 }
}
