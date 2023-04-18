// Client 透過  client 來操作 discord 的 API 
// GatewayIntentBits 透過這個決定 bot 的任務
const { Client, GatewayIntentBits } = require('discord.js');


// intents 表示該 bot 需要做甚麼事
// 需要 GuildsMessages 與 MessageContent 這兩個權限
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

module.exports = client;
