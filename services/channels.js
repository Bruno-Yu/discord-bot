/* 
  discord 頻道對話串的寫法
  為確保 chatgpt 記得之前的事情
 */

const { DISCORD_CHANNEL_MAX_MESSAGE } = require('../config');

const { aiAssistant } = require('../apis');

// 取共用訊息模板
const { replyMessage, errorMessage } = require('../data/message');

// 需注意這邊的 message 是甚麼 因為下方許多都是 message 取出的物件方法
// 此 message 應是 discord 傳出的 message 物件，含該頻道物件以及其內容
async function channelMessage(message) {
  let cacheMsg = null;
  
  try {
    cacheMsg = await message.channel.send(replyMessage);

    let messages = [];
    if(DISCORD_CHANNEL_MAX_MESSAGE ===1 ) { 
      messages.push({
        role: 'user',
        content: message.content,
      });
    } else {
      // 抓取目前該頻道內容所有的 message
      const channelMessageData = await message.channel.messages.fetch({
        limit: DISCORD_CHANNEL_MAX_MESSAGE + 1,
      });
      // 修正排序
      const reverseMessages = channelMessageData.reverse();

      messages = reverseMessages.map((msg)=>{
        // bot
        if(msg.author.bot) {
          return {
            role: 'system',
            content: msg.content,
          }
        }else{
          return {
            role: 'user',
            content: msg.content,
          };
        }
      }).filter((msg)=>msg!==null);

      const text = await  aiAssistant(messages);
      await cacheMsg.delete(); // 刪除上次回復的訊息
      // 不大確定 send 與 reply 間的差異
      // reply 這個語法簡單來講就是針對使用者的訊息去「回覆」，接著你就可以試著在 Discord 中輸入一些訊息，然後你就會發現你的 Discord Bot 已經會回覆你一些訊
      message.reply(text);
    } 
  }catch (error){
    await cacheMsg.delete();
    message.reply(errorMessage({
      status: error.response.status,
      statusText: error.response.statusText
    }))
  }
}

module.exports = channelMessage;