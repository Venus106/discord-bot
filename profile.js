const { MessageEmbed , Discord , MessageActionRow , MessageButton , Modal , MessageAttachment } = require('discord.js');
let db = require('pro.db')
let Canvas = require('canvas')
module.exports = {
  name:"profile",
  description:"🔒 Command",
  options: [{
    name: "seller",
    description: "🔒",
    type: 6,
    required: false,
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.user || interaction.options.getUser("seller")
  let pointSs = db.get(`points_${user.id}`)
  if( pointSs == null) {
      await db.set(`points_${user.id}` , {
    userId : user.id,
    count : 0
  })
  }
  let pointss = db.get(`points_${user.id}`)
  let points = pointss.count;

      let fb = db.get(`feedback_${user.id}`)
      if(fb == null) fb = 0

      let offers = db.get(`offers_${user.id}`)
      if(offers == null) offers = 0
                   const canvasp = Canvas.createCanvas(512, 512); // هنا مقاسات الصوره 
      
    const ctx = canvasp.getContext('2d') // هنا الصوره 2d او 3d الخ
    
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/968962644230934538/1041038396358918194/1656720305198.779.jpg'); // هنا الخلفيه تحط فيها المسار بتاع الصوره 
    ctx.drawImage(background, 0, 0, canvasp.width, canvasp.height); // هنا ةمقاسات الخلفيه سيبها زي مهي
    const cutie = await Canvas.loadImage('https://cdn.discordapp.com/attachments/968962644230934538/1041038396358918194/1656720305198.779.jpg'); // هنا مسار الصوره
    ctx.drawImage(cutie, 25, 25, 0, 0);       
      ctx.font = "30px Andalus";
      ctx.fillStyle = "blue";
      ctx.fillText(offers, 20, 465);
      
      ctx.fillStyle = "blue";
      ctx.fillText(points, 20, 255);
      
      ctx.fillStyle = "blue";
      ctx.fillText(fb, 20, 355);
      
      ctx.font = "25px Arial";
      ctx.fillStyle = "blue";
      ctx.fillText(user.tag , 240 , 100);
                 
        
        ctx.beginPath();
        ctx.arc(100, 75, 90, 0, 4 * Math.PI);
        ctx.closePath();
        ctx.clip();
        let lllcc = await Canvas.loadImage(user.displayAvatarURL().replace("webp" , "png"));
        ctx.drawImage(lllcc , 26.6 , 7 , 150 , 155)
      
      
    const attachment = new MessageAttachment(canvasp.toBuffer(), 'image.jpeg'); 
    
        
    interaction.editReply({ files: [attachment]}); 
} catch (err) {
      console.log(err)
  }
 }
}
