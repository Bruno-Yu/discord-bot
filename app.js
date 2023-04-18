// 方便部屬使用 這邊使用 express 

const express = require('express');

const {
  PORT,
  DISCORD_BOT_TOKEN,
} = require('./config')

const { discord } = require('./connection');
const { bothMessages } = require('./services');

discord.login(DISCORD_BOT_TOKEN);

discord.once('ready', (e)=>{
  console.log(`logged in as ${c.user.tag} `);
})

discord.on('messageCreate', (message)=>{
  // 如果是 bot 則跳過
  if(message.author?.bot){
    return;
  }
  botMessages(message);

});

// 部分伺服器會需要 HTTP Endpoint
const app = express();

app.get('/', (req, res)=> res.send('express on'));
app.listen(PORT, ()=> console.log(`listening on ${PORT}`));