const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"del-autoline",
  description:"to set a autoline channel number 1",
  options : [{
    name : "channel",
    description: "channel you want to set it",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try { 
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);
let nqr = db.get(`Auto_Line_${interaction.guild.id}`)
      let channel = interaction.options.getChannel('channel')
      let chid = channel.id;
  await db.set(`Auto_Line_${interaction.guild.id}`, nqr.filter(nqr => nqr !== chid));
      interaction.editReply(`> **Done Delete ${channel} To The AutoLine Channel **`)
      
} catch (err) {
      console.log(err)
  }
 }
}
