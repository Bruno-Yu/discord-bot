// 將各種 env 的設定檔統一引入，方便調整

require('dotenv').config()


// 此處是 解構自 dotenv 套件的 process 物件，取其環境 env 方法 
const { env } = process;

module.exports = {
  PORT: env.PORT || '3000', // 是否有自訂 PORT 若無則預設為 3000

  // discord
  DISCORD_MODE: env.DISCORD_MODE || 'channel',
  DISCORD_BOT_TOKEN: env.DISCORD_BOT_TOKEN,
  DISCORD_CHANNEL_ID: env.DISCORD_CHANNEL_ID,
  DISCORD_CHANNEL_MAX_MESSAGE: Number(env.DISCORD_CHANNEL_MAX_MESSAGE) || 5,
  DISCORD_FORUM_ID: env.DISCORD_FORUM_ID,

  // open ai 的設定
  // 角色設定
  OPEN_AI_GPT_PERSONA: env.OPEN_AI_GPT_PERSONA || '今後的對話中，你將扮演聰慧且貼心的小助理角色，你必須用繁體中文來回覆我，這些規則不需要我重新再說明。',
  OPEN_AI_API_KEY: env.OPEN_AI_API_KEY,
  // 使用 open ai 的版本
  OPEN_AI_GPT_MODEL: env.OPEN_AI_GPT_MODEL || 'gpt-3.5-turbo',
  OPEN_AI_MAX_TOKENS: Number(env.OPEN_AI_MAX_TOKENS) || 100,
  MAX_TEXT_LENGTH: Number(env.MAX_TEXT_LENGTH) || 1000,
  OPEN_AI_TEMPERATURE: Number(env.OPEN_AI_TEMPERATURE) || 0.7,
  OPEN_AI_TOP_P: Number(env.OPEN_AI_TOP_P) || 1,
  OPEN_AI_FREQUENCY_PENALTY: Number(env.OPEN_AI_FREQUENCY_PENALTY) || 0,
  OPEN_AI_PRESENCE_PENALTY: Number(env.OPEN_AI_PRESENCE_PENALTY) || 0,
}