const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let {QuickDB} = require('quick.db')
let db = new QuickDB()
module.exports = {
  name:"set-autoline",
  description:"to set a autoline channel",
  options : [{
    name : "channel",
    description: "channel you want to set it",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.editReply(`** 😕 You don't have permission **`);
      let channel = interaction.options.getChannel('channel')
      let chid = channel.id;
db.push(`Auto_Line_${interaction.guild.id}` , chid)
      
      interaction.editReply(`> **Done Set ${channel} To The AutoLine Channel <a:wz_true:984008251286913064>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
