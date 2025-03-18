  const client = require("../index");

client.on('ready' , async() => {
  console.log(`================
  
Bot Name : ${client.user.username}
Bot Tag : ${client.user.tag}
Bot Id : ${client.user.id}
Servers Count : ${client.guilds.cache.size}
Users Count : ${client.users.cache.size}

================`)
client.user.setStatus('dnd');
  let status = [`𝖭𝖾𝗏𝖾𝗋 𝖲 𝖮𝗇 𝖳𝗈𝗉`,];
  setInterval(()=>{
client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})